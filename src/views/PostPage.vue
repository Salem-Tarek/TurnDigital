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

export default {
  name: "PostPage",
  data(){
    return {
      post: {
          id: 1,
          title: "The Impact of Technology on the workplace: How Technology is Changing 1",
          category: "Technology",
          image: require("@/assets/enginner2.jpg"),
          author_image: require("@/assets/enginner2.jpg"),
          author: "Json Franciso",
          date: "August 20, 2022",
          desc1: "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
          desc2: "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
          destinationDesc1: "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.",
          destinationDesc2: "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
          iternaryDesc1: "While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.",
          iternaryDesc2: "Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.",
          packingDesc: "Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.",
          conclusion: "Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride."
        },
    }
  },
  components: {
    Ad,
    Quote
  },
  mounted(){
    console.log("this.$route.params.id");
    console.log(this.$route.params.id);
  }
};
</script>