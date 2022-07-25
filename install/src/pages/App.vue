<template>
  <div id="app">
    <input type="text" v-model="Search">
    <div v-for="post in filteredPosts" :key="App.id">
      <post :post="App"></post>

    </div>
  </div>
</template>
<script>
 import Post from "/components/Post";
export default {
  name: "App",
  components: { Post},
  data() {
    return {
      search: '',
      posts: [
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
  computed: {
    filteredPosts(){
      return this.posts.filter(post => App.body.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>
