<template>
  <router-link :to="{ name: 'PostPage', params: { id: post.id } }" class="transition-all duration-300 hover:-translate-y-2 border border-light-darker p-4 rounded-lg">
    <div class="w-full rounded-md overflow-hidden mb-3 h-auto">
      <img class="w-full" :src="post.image" :alt="post.title" />
    </div>
    <div v-if="!loading">
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
    <div  v-else class="p-6">
      <h5 class="mb-2 animate-pulse text-xl font-medium text-neutral-900 dark:text-white">
        <span class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
      </h5>
      <p class="mb-4 animate-pulse text-base text-neutral-700 dark:text-white">
        <span
          class="inline-block min-h-[1em] w-7/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
        <span
          class="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
        <span
          class="inline-block min-h-[1em] w-4/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
        <span
          class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
        <span
          class="inline-block min-h-[1em] w-8/12 flex-auto cursor-wait bg-current align-middle opacity-50"></span>
      </p>
      <a
        href="#"
        tabindex="-1"
        class="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out before:inline-block before:content-[''] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"></a>
    </div>
  </router-link>
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
    },
    loading: {
      type: Boolean
    }
  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
