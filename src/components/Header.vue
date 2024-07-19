<template>
  <header class="py-2">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="logo">
          <img src="@/assets/logo2.png" alt="LOGO">
        </div>
        <ul class="list-none hidden lg:flex gap-3 items-center">
          <li>
            <router-link to="">Home</router-link>
          </li>
          <li>
            <router-link to="">Blog</router-link>
          </li>
          <li>
            <router-link to="">Single Post</router-link>
          </li>
          <li>
            <router-link to="">Pages</router-link>
          </li>
          <li>
            <router-link to="">Contact</router-link>
          </li>
        </ul>
        <div class="flex gap-4 items-center">
          <div class="hidden lg:flex items-center rounded-md bg-light px-3 py-2">
            <input class="bg-transparent focus:outline-none" type="text" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </div>
          <label for="toggle" class="relative flex items-center cursor-pointer">
            <input type="checkbox" id="toggle" class="sr-only peer">
            <div class="block relative bg-light w-16 h-9 p-1 rounded-full before:absolute before:bg-white before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-[4px]  peer-checked:before:left-8 peer-checked:before:bg-white">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="absolute bg-white transition-all z-10 duration-500 left-2 peer-checked:left-9 peer-checked:opacity-0 peer-checked:z-[8] top-1/2 -translate-y-1/2 bi bi-brightness-high-fill" viewBox="0 0 16 16">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="absolute bg-white transition-all z-[9] duration-500 left-2 peer-checked:left-9 top-1/2 -translate-y-1/2 bi bi-moon-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
            </svg>
          </label>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
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
