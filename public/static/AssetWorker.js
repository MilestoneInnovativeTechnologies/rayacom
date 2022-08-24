self.importScripts("/static/lodash.min.js");

self.onmessage = function(e){
  const { type,payload } = e.data
  self[type](payload)
}

const Auth = { Master:"",Data:""}
const latest_fetch_interval = 10 * 1000;
let latest_timeOut = null, latest_date = '', master_prop_time = '';
let PROPERTIES = {}, PROP_SET = {}, MASTERS = [], STORE_MASTER = {};
const PROP_SUMMARY = {}

function init({ property_time,masters,master_time,master_property_time,auth_data,auth_master }){
  Auth.Data = auth_data; Auth.Master = auth_master; master_prop_time = master_property_time;
  for(let id in masters) MASTERS.push([id,masters[id],master_time[id]||0])
  if(property_time) fetch(url('asset',property_time,'properties')).then(handlePropertiesResponse)
}

function url(item,user,time,name,id){
  let parts = [location.origin,item];
  if(user !== undefined) parts.push(user)
  if(time !== undefined) parts.push(time)
  if(id !== undefined) parts.push(id)
  if(name !== undefined) parts.push(name)
  return parts.join('/') + '.json'
}

function handlePropertiesResponse(response){
  if(!response.ok) return;
  response.json().then(function(properties){
    PROPERTIES = properties;
    _.forEach(PROPERTIES,function(properties,master){
      let pObj = new Object({});
      _.forEach(properties,function(property,idx){
        PROP_SUMMARY[property.id] = [master,_.get(_.find(MASTERS,Ary => Ary[0] == master),1),property.name,property.nature,property.index,property.value_master,idx]
        pObj[property.name] = property['nature'] === 'Y/N' ? false : (property['nature'] === 'Multiple' ? [] : ((property['value_master'] || property['index'] === 'Y') ? { master:property['value_master'],data:null,value:null } : null))
      })
      PROP_SET[String(master)] = pObj
    })
    doFetchMasterData(0)
  })
}

function doFetchMasterData(idx){
  if(MASTERS.length <= idx) return MastersFetched();
  let master = MASTERS[idx]; STORE_MASTER[master[1]] = new Object({});
  fetch(url('asset',Auth.Data,master[2],master[1],master[0])).then(response => response.json()).then(json => handleMasterDataResponse(idx,json))
}

function doFetchMasterDataProperties(idx){
  if(MASTERS.length <= idx) return PropertiesFetched(); let master = MASTERS[idx];
  fetch(url('properties',Auth.Data,master_prop_time,master[1],master[0])).then(response => response.json()).then(PAry => handleDataPropertiesResponse(idx,PAry))
}

function MastersFetched(){
  doFetchMasterDataProperties(0)
}
function PropertiesFetched(){
  setTimeout((wn) => {
    const MAST = _(MASTERS).mapKeys(Ary => Ary[1]).mapValues(Ary => ({ id:Ary[0],name:Ary[1],time:Ary[2],data:{} })).value()
    wn.postMessage({ payload:MAST,action:'master',store:'master' })
    wn.postMessage({ payload:PROPERTIES,action:'property',store:'master' })
    wn.postMessage({ payload:PROP_SET,action:'property_set',store:'master' })
    wn.postMessage({ payload:STORE_MASTER,action:'data',store:'master' })
    STORE_MASTER = null; PROP_SET = null; MASTERS = _(MASTERS).mapKeys(Ary => Ary[0]).mapValues(Ary => Ary[1]).value()
    wn['latest']();
    latest_timeOut = setInterval(wn['latest'],latest_fetch_interval);
  },1000,self)
}

function handleMasterDataResponse(idx,MAry){
  let mName = MASTERS[idx][1], mId = String(MASTERS[idx][0]), mIds = [];
  _.forEach(MAry,function(master){
    let id = String(master[0]), name = _.trim(master[1]);
    STORE_MASTER[mName][id] = _.cloneDeep(Object.assign({ id,name },_.get(PROP_SET,mId)))
    mIds.push(id);
  })
  let BProps = _(_.get(PROPERTIES,mId)).filter(['nature','Y/N']).mapKeys('name').mapValues(prop => _.get(prop,['masters',0,'ids'],[])).value(), dBProp = {};
  _.forEach(BProps,function(ids,prop_name){
    let valObj = { [prop_name]:true }, SMI = _(ids).filter(mId => _.includes(mIds,String(mId))).mapKeys().mapValues(() => valObj).value();
    _.merge(STORE_MASTER[mName],SMI)
  })
  doFetchMasterData(idx+1)
}

function handleDataPropertiesResponse(idx,PAry){
  let mName = MASTERS[idx][1], mId = String(MASTERS[idx][0]), mProps = _.get(PROPERTIES,mId,[]).filter(prop => prop['nature'] !== 'Y/N')
  let mIds = _.keys(STORE_MASTER[mName])
  _.forEach(PAry,function(dObj,property_id){
    let SMI = {}, property = _.find(mProps,['id',parseInt(property_id)]), pName = property.name;
    if(property && property.index === 'N'){
      if(!property['value_master']){
        const vlFn = (property['nature'] === 'Single')
          ? (Ary) => new Object({ [pName]:Ary[0] })
          : (Ary) => new Object({ [pName]:Ary })
        // SMI = _(dObj).filter((valAry,mId) => _.includes(mIds,mId)).mapValues(vlFn).value()
        _.forEach(dObj,(valAry,id) => { if(_.includes(mIds,id)) SMI[id] = vlFn(valAry) })
      } else {
        let val_master = _.find(MASTERS,mAry => mAry[0] == property['value_master']), val_mas_id = val_master[0], val_mas_name = val_master[1], val_mas_data = STORE_MASTER[val_mas_name]
        const vlFn = (property['nature'] === 'Single')
          ? (ids) => new Object({ [pName]:{ data:ids[0],value:_.get(val_mas_data,[ids[0],'name'],null) } })
          : (ids) => _.map(ids,id => new Object({ [pName]:{ master:val_mas_id,data:id,value:_.get(val_mas_data,[id,'name'],null) } }))
        // SMI = _(dObj).filter((valAry,mId) => _.includes(mIds,mId)).mapValues(vlFn).value()
        _.forEach(dObj,(valAry,id) => { if(_.includes(mIds,id)) SMI[id] = vlFn(valAry) })
      }
    }
    _.merge(STORE_MASTER[mName],SMI)
  })
  const iProps = _.filter(mProps,['index','Y'])
  _.forEach(iProps,function(property){
    let SMI = {}, pName = property.name;
    if(!property['value_master']){
      _.forEach(property['masters'],function({ value,ids }){
        if(property['nature'] === 'Single'){
          let propObj = new Object({ [pName]:value })
          _.forEach(ids,function(id){ if(_.includes(mIds,String(id))) SMI[id] = propObj })
        } else {
          const prObj = new Object({ [pName]:[value] })
          _.forEach(ids,function(id){
            if(!_.includes(mIds,String(id))) return;
            if(!SMI.hasOwnProperty(id)) {
              SMI[id] = _.cloneDeep(prObj)
            } else {
              if(!SMI[id].hasOwnProperty(pName)){
                SMI[id][pName] = [value]
              } else if(SMI[id][pName].indexOf(value)) SMI[id][pName].push(value)
            }
          })
        }
      })
    } else {
      let val_master = _.find(MASTERS,mAry => mAry[0] == property['value_master']), val_mas_id = val_master[0], val_mas_name = val_master[1], val_mas_data = STORE_MASTER[val_mas_name]
      const valTxt = (id) => _.get(val_mas_data,[id,'name']);
      _.forEach(property['masters'],function({ data,ids }){
        const valObj = new Object({ master:property['value_master'],data,value:valTxt(data) })
        if(property['nature'] === 'Single'){
          const valPropObj = new Object({ [pName]:valObj })
          _.forEach(ids,function(id){ if(_.includes(mIds,String(id))) SMI[id] = valPropObj })
        } else {
          const valPropObj = new Object({ [pName]:[valObj] })
          _.forEach(ids,function(id){
            if(!_.includes(mIds,String(id))) return;
            if(!SMI.hasOwnProperty(id)) {
              SMI[id] = valPropObj
            } else {
              if(!SMI[id].hasOwnProperty(pName)){
                SMI[id][pName] = [valObj]
              } else SMI[id][pName].push(valObj)
            }
          })
        }
      })
    }
    _.merge(STORE_MASTER[mName],SMI)
  })
  doFetchMasterDataProperties(idx+1)
}

function interfere_latest(){
  clearInterval(latest_timeOut);
  latest();
  latest_timeOut = setInterval(latest,latest_fetch_interval);
}

function latest(){
  fetch(url('latest'),{ method:'post',headers:{ 'latest-date':latest_date, 'Auth-Data': Auth.Data, 'Auth-Master': Auth.Master }})
    .then(r => r.json()).then(process_latest_response)
}

function process_latest_response(data){
  const masters = {};
  _.forEach(data,function(records,mName){
    if(mName === '_next') return latest_date = records;
    if(records && records.length){
      if(mName === 'mp') {
        let mObj = _(records).groupBy(({ property }) => _.get(PROP_SUMMARY,[property,1])).mapValues(mProps => _(mProps).groupBy('data').mapValues(mdProps => _(mdProps).mapKeys(({ property }) => _.get(PROP_SUMMARY,[property,2])).mapValues('value').value()).value()).value()
        _.merge(masters,mObj);
      } else {
        if(mName === 'pm') {
          _.forEach(records,record => {
            let Property = _(PROPERTIES).flatMap().filter(property => record.property == property.id).mapValues(property => Object.assign({},property,{ masters:_(property.masters).filter(pM => pM.data == record.data).value() })).values().nth(0)
            let PIds = _.get(Property,['masters',0,'ids']), CIds = [];
            let master_id = PROP_SUMMARY[record.property][0], m_prop_idx = PROP_SUMMARY[record.property][6];
            try {
              CIds = JSON.parse(record.ids)
            } catch (e) {
              CIds = [];
            }
            let added = _.difference(CIds,PIds), removed = _.difference(PIds,CIds);
            let mName = PROP_SUMMARY[record.property][1], pName = PROP_SUMMARY[record.property][2];
            if(!_.isEmpty(added)) _.forEach(added,mid => {
              if(!_.has(masters,mName)) masters[mName] = {};
              if(!_.has(masters[mName],mid)) masters[mName][mid] = {};
              if(!_.has(masters[mName][mid],pName)) masters[mName][mid][pName] = {};
              if(!_.has(masters[mName][mid][pName],'_add')) masters[mName][mid][pName]['_add'] = [];
              masters[mName][mid][pName]['_add'].push(record.data)
            })
            if(!_.isEmpty(removed)) _.forEach(removed,mid => {
              if(!_.has(masters,mName)) masters[mName] = {};
              if(!_.has(masters[mName],mid)) masters[mName][mid] = {};
              if(!_.has(masters[mName][mid],pName)) masters[mName][mid][pName] = {};
              if(!_.has(masters[mName][mid][pName],'_remove')) masters[mName][mid][pName]['_remove'] = [];
              masters[mName][mid][pName]['_remove'].push(record.data)
            })
            let pms = _.get(PROPERTIES,[master_id,m_prop_idx,'masters']);
            let masters_data_index = _.findIndex(pms,({ data }) => data == record.data);
            if(masters_data_index > -1) PROPERTIES[master_id][m_prop_idx]['masters'][masters_data_index]['ids'] = CIds;
          })
        } else {
          if(records[0].master){
            masters[mName] = {}
            _.forEach(records,function({ id,name }){
              masters[mName][id] = { name }
            })
          } else {
            self.postMessage({ store:_.toLower(mName),action:'store',payload:records })
          }
        }
      }
    }
  })
  if(Object.keys(masters).length > 0) self.postMessage({ store:'master',action:'recursive',payload:masters })
}
