<template>
  <section class="dropdown-wrapper">
    <div class="q-px-lg q-pt-xl q-mb-md">
      <div @click="isVisible = !isVisible" class="search">
        <span v-if="selectedItem" >{{selectedItem.name}}</span>
        <span v-else>SEARCH</span>
        <q-icon name="search"
                size="lg"
                style="width: 900px"/>


      </div>
      <div v-if="isVisible" class="dropdown-popover">
        <input v-model="searchQuery"
               type="text"
               outlined
               filled
               placeholder="search here" >
        <div class="options">
          <ul>
            <li @click="selectItem(user)" v-for="(user, index) in filteredUser" :key="`user-${index}`">{{ user.name }}</li>

          </ul>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
import { useMasterStore } from 'stores/master'
const master = useMasterStore()
const ITEM = master.ITEM
export default {
  data(){
    return{
      searchQuery: "",
      selectedItem: null,
      isVisible: false,
      userArray: [
        {
          "id": 1,
          "name": "colgate",
        },
        {
          "id": 2,
          "name": "good night",
        },
        {
          "id": 3,
          "name": "hide & seek",
        },
        {
          "id": 4,
          "name": "lakme",
        },
        {
          "id": 5,
          "name": "yardly 50 gm",
        },
        {
          "id": 6,
          "name": "enchanteur",
        },
        {
          "id": 7,
          "name": "blue lady",
        },
        {
          "id": 8,
          "name": "vicks 100 GM ",
        },
        {
          "id": 9,
          "name": "classmate notebook",
        },
        {
          "id": 10,
          "name": "dustbin",
        }
      ]
    };
  },
  computed:{
    filteredUser() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === ""){
        return this.userArray;
      }
      return this.userArray.filter((user) => {
        return Object.values(user).some((word) => String(word).includes(query)
        );
      });
    },
  },
  methods: {
    selectItem(user){
      this.selectedItem = user


    }
  },

}

</script>
<style scoped lang="scss">
.dropdown-wrapper {
  color: #d720ac;
  max-width: 330px;
  .search {
    height: 60px;
    length:10px;
    width: 500px;
    border: 2px solid lightgray;
    border-radius: 10px;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
  }

  .dropdown-popover{
    position: center;
    border: 2px solid lightgray;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    max-width: 100%;
    padding: 20px;
    input{
      width: 100%;
      height: 30px;
      border: 0.1px solid lightgray;
      font-size: 16px;
      padding-right: 8px;
    }
    .options{
      width: 100%;
      ul{
        list-style: none;
        text-align: left;
        padding-left: 5px;
        max-height: 180px;
        overflow-y: scroll;
        overflow-x: hidden;
        //border: 1px solid lightgray;


        li{
          width: 100%;
          border-bottom: 1px solid lightgray;
          padding: 5px;
          background-color: #dce6ec;
          cursor: pointer;
          font-size: 16px;
          &:hover{
            background: #70878a;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
