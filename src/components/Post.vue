<template>
  <div class="border border-light-darker p-4 rounded-lg">
    <div class="w-full rounded-md overflow-hidden mb-3">
      <img class="w-full" :src="post.image" :alt="post.title" />
    </div>
    <div>
      <span class="py-1 px-2 mb-2 rounded-md inline-block text-sm text-center text-primary bg-primary/20">
        {{ post.category }}
      </span>
      <h1 class="text-xl lg:text-2xl font-medium mb-2">
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
  </div>
</template>

<script>
export default {
  name: "Post",
  data(){
    return {
    }
  },
  props: {
    post: {
      type: Object
    }
  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
