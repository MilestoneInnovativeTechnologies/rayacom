import { boot } from 'quasar/wrappers'
import axios from 'axios'

const aInstance = axios.create({
  baseURL: (location.protocol) + "//" + (location.host),
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Auth-Data': 10001,
    'Auth-Master': 2,
  }
})

const post = function(item,action,args){
  if(!item || !action) return Promise.reject('Item or Action empty');
  return new Promise(resolve => aInstance.post(`${item}/${action}`,args).then(function({ data }){
    AssetWorker.postMessage({ type:'interfere_latest' })
    resolve(data);
  }))
};

export default boot(({ app }) => {
  app.config.globalProperties.$post = post
})

export { post }
