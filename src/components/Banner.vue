<template>
  <section class="py-8 my-8">
    <div class="container relative">
      <img src="@/assets/enginner1.jpg" class="w-full object-cover rounded-lg min-h-[350px] h-[60vh]" />
      <div class="bg-white shadow-lg px-6 py-8 w-[90%] max-w-[400px] rounded-lg absolute left-3 lg:left-8 -bottom-12">
        <span class="py-1 px-2 mb-2 rounded-md inline-block text-sm text-center text-white bg-primary">
          Technology
        </span>
        <h1 class="text-xl lg:text-2xl font-medium mb-2">
          The Impact of Technology on the workplace: How Technology is Changing
        </h1>
        <div class="flex items-center gap-3">
          <div class="w-[40px] h-[40px] overflow-hidden rounded-full">
            <img src="@/assets/enginner2.jpg"  class="w-full h-full rounded-full" />
          </div>
          <span class="text-base text-light-darker">Jason Francisco</span>
          <span class="text-base text-light-darker">August 20, 2022 </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data(){
    return {
    }
  },
  methods: {
  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
