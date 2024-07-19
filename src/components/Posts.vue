<template>
  <section class="my-4">
    <div class="container">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Post v-for="post in posts" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import Post from './Post'
export default {
  name: "Posts",
  data(){
    return {
      posts: [
        {
          id: 1,
          title: "The Impact of Technology on the workplace: How Technology is Changing 1",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 2,
          title: "The Impact of Technology on the workplace: How Technology is Changing 2",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 3,
          title: "The Impact of Technology on the workplace: How Technology is Changing 3",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 4,
          title: "The Impact of Technology on the workplace: How Technology is Changing 4",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 5,
          title: "The Impact of Technology on the workplace: How Technology is Changing 5",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 6,
          title: "The Impact of Technology on the workplace: How Technology is Changing 6",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 7,
          title: "The Impact of Technology on the workplace: How Technology is Changing 7",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 8,
          title: "The Impact of Technology on the workplace: How Technology is Changing 8",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 9,
          title: "The Impact of Technology on the workplace: How Technology is Changing 9",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
        {
          id: 10,
          title: "The Impact of Technology on the workplace: How Technology is Changing 10",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022"
        },
      ]
    }
  },
  components: {
    Post
  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
