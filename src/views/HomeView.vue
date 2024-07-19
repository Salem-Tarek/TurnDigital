<template>
  <div>
    <Banner />
    <Ad />
    <Posts />
    <Ad />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner";
import Ad from "@/components/Ad";
import Posts from "@/components/Posts";

export default {
  name: "HomeView",
  components: {
    Banner,
    Ad,
    Posts
  }
};
</script>
