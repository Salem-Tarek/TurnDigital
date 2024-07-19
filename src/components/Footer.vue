<template>
  <footer class="bg-light py-8">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 justify-between pb-8 border-b border-light-darker">
        <div>
          <h4 class="font-semibold mb-2">About</h4>
          <p class="text-sm text-light-darker mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perferendis corporis fugiat! Porro velit ipsam dolorem quae et numquam amet suscipit deserunt quos iure, aliquid, accusantium temporibus maiores necessitatibus dolore.
          </p>
          <p>
            <span class="font-semibold">Email: </span>
            <a class="transition-all hover:text-primary" href="mailto:info@jstemplate.net">info@jstemplate.net</a>
          </p>
          <p>
            <span class="font-semibold">Phone: </span>
            <a class="transition-all hover:text-primary" href="tel:880123456789">880123456789</a>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold mb-2">Quick Link</h4>
            <ul class="list-none text-sm flex flex-col gap-1 text-light-darker">
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Home</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">About</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Blog</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Archieved</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Author</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Contact</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Category</h4>
            <ul class="list-none text-sm flex flex-col gap-1 text-light-darker">
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Life Style</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Technology</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Travel</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Buisness</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Economy</router-link>
              </li>
              <li>
                <router-link to="" class="font-medium transition-all hover:text-black">Sports</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-8 bg-white rounded-lg">
          <div class="text-center mb-4">
            <h4 class="text-lg font-semibold">Weekly Newsletter</h4>
            <p class="text-base">Get blog articles and offers via email</p>
          </div>
          <div class="flex items-center rounded-md bg-transparent border-2 border-light px-3 py-2 mb-4">
            <input class="grow bg-transparent focus:outline-none pe-3" type="text" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </div>
          <button class="bg-primary py-3 px-2 text-center text-white w-full rounded-md hover:bg-primary/80">Subscribe</button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center justify-between flex-col lg:flex-row">
          <div class="flex items-center gap-2">
            <img width="40" src="@/assets/footer-logo.png" alt="">
            <div>
              <p class="text-sm">Meta<span class="font-bold">Blog</span></p>
              <p class="text-sm">&copy; Js Template 2023. All Rights Reserved</p>
            </div>
          </div>
          <ul class="list-none flex text-sm">
            <li class="border-e border-light-darker pe-3 me-3">
              <router-link to="">Terms Of Use</router-link>
            </li>
            <li class="border-e border-light-darker pe-3 me-3">
              <router-link to="">Privacy Policy</router-link>
            </li>
            <li class="">
              <router-link to="">Cookie Policy</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
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
