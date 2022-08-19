import { boot } from 'quasar/wrappers'
import { useMasterStore } from "stores/master";
import { useOrderStore } from "stores/order";

export default boot(async (ctx) => {
  if(typeof AssetWorker === 'undefined') {

  } else {
    AssetWorker.onmessage = function(event){
      const { store,action,payload } = event.data
      const masterStore = useMasterStore();
      const orderStore = useOrderStore();
      switch (store){
        case 'master':
          masterStore[action](payload);
          break;
        case 'order':
          orderStore[action](payload);
          break;
      }
    }
  }
})
