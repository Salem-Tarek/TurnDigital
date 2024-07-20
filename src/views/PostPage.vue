<template>
  <section class="py-4 my-4 max-w-[1000px] mx-auto">
    <div class="container">
      <div class="mb-4">
        <span class="py-1 px-2 mb-2 rounded-md inline-block text-sm text-center text-white bg-primary">
          {{ post.category }}
        </span>
        <h1 class="text-xl lg:text-4xl font-medium mb-2">
          {{ post.title }}
        </h1>
        <div class="flex items-center gap-3">
          <div class="w-[40px] h-[40px] overflow-hidden rounded-full">
            <img :src="post.author_image"  class="w-full h-full rounded-full" />
          </div>
          <span class="text-base text-light-darker">{{ post.author }}</span>
          <span class="text-base text-light-darker">{{ post.date }}</span>
        </div>
      </div>
      <div class="mb-4">
        <img :src="post.image" class="w-full object-cover rounded-lg min-h-[350px] h-[60vh]" />
      </div>
      <div>
        <p class="mb-6 text-lg">
          {{ post.desc1 }}
        </p>
        <p class="mb-6 text-lg">
          {{ post.desc2 }}
        </p>
      </div>
      <div class="">
        <h3 class="mb-2 text-lg font-bold">Research Your Destination</h3>
        <div clas="">
          <p class="mb-3 text-base">
            {{ post.destinationDesc1 }}
          </p>
          <p class="mb-3 text-base">
            {{ post.destinationDesc2 }}
          </p>
        </div>
      </div>
      <div class="">
        <h3 class="mb-2 text-lg font-bold">Plan Your Itinerary</h3>
        <div clas="">
          <p class="mb-3 text-base">
            {{ post.iternaryDesc1 }}
          </p>
          <p class="mb-3 text-base">
            {{ post.iternaryDesc2 }}
          </p>
        </div>
      </div>
      <Quote />
      <Ad />

      <div class="">
        <h3 class="mb-2 text-lg font-bold">Pack Lightly and Smartly</h3>
        <div clas="">
          <p class="mb-3 text-base">
            {{ post.packingDesc }}
          </p>
        </div>
      </div>
      <div class="">
        <h3 class="mb-2 text-lg font-bold">Conclusion:</h3>
        <div clas="">
          <p class="mb-3 text-base">
            {{ post.conclusion }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Ad from "@/components/Ad";
import Quote from "@/components/Quote";
import axios from 'axios';

export default {
  name: "PostPage",
  data(){
    return {
      post: {}
    }
  },
  components: {
    Ad,
    Quote
  },
  methods: {
    getPost(){
      axios.get('https://raw.githubusercontent.com/Salem-Tarek/TurnDigital/master/src/assets/json/posts.json')
        .then(res => {
          let posts = res.data?.data || [];
          if(posts && posts.length){
            this.post = posts.filter(post => post.id == this.$route.params.id)[0];
          }
          this.scrollToTop();
        })
        .catch(err => {
          console.log(err.response);
        })
    },
    scrollToTop(){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth' // Optional, for smooth scrolling
      });
    },
  },
  watch: {
    '$route': {
      handler(){
        this.scrollToTop();
      },
      deep: true,
    }
  },
  mounted(){
    this.getPost();
  }
};
</script>