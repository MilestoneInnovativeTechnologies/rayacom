<template>
  <q-page padding>

    <div class="row">
      <q-expansion-item class="col"
      expand-separator

      label="Select Items"
      header-class="text-purple">

        <q-input v-model="text" placeholder="Search Here"
               class="col" >

          <q-btn
             color="primary"
             size="lg"
             icon="search"
          />

        </q-input>
      <q-card>
        <q-card-section>
          <q-item
            v-for="userArray in userArray"
            :key="userArray.id"
            clickable
            v-ripple>
            <div class="options">
              <ul>
                <li @click="selectItem(user)" v-for="(user, index) in filtereduserArray" :key="`user-${index}`">{{ user.name }}</li>

              </ul>
            </div>
           <q-item-label>{{ userArray.name }}</q-item-label>
          </q-item>

        </q-card-section>
      </q-card>
    </q-expansion-item>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
export default {
  setup() {
    return {
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
    }
    method: {
      selectedItem(user)
      this.searchQuery=user
    }

  },
}


</script>
