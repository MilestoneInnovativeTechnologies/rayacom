import { boot } from 'quasar/wrappers'
import { useMasterStore } from "stores/master";
import { useOrderStore } from "stores/order";
import { useLeaveStore } from "stores/leave";
import { useReviewStore } from "stores/review";
import { useOfferStore } from "stores/offers";

export default boot(async (ctx) => {
  if(typeof AssetWorker === 'undefined') {

  } else {
    AssetWorker.onmessage = function(event){
      const { store,action,payload } = event.data
      const masterStore = useMasterStore();
      const orderStore = useOrderStore();
      const leaveStore = useLeaveStore()
      const reviewStore = useReviewStore()
      const offerStore = useOfferStore()
      switch (store){
        case 'master':
          masterStore[action](payload);
          break;
        case 'order':
          orderStore[action](payload);
          break;
        case 'leave':
          leaveStore[action](payload);
          break;
        case 'review':
          reviewStore[action](payload);
          break;
        case 'offer':
          offerStore[action](payload);
          break;
      }
    }
  }
})
