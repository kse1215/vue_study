<template>
  <section class="visual">
    <swiper
      class="visulSwiper"
      :modules="[Autoplay, Pagination, Navigation]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :loop="true">
      <swiperSlide v-for="(slide, i) in slides" :key="i">
        <!-- i: index -->
        <!-- <img :src="slide.img" :alt="'slide' + i" /> -->
        <img :src="slide.img" :alt="`slide ${i + 1}`" />
      </swiperSlide>
    </swiper>
  </section>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 슬라이드 더미 데이터
const slides = [
  { img: "https://picsum.photos/id/1011/1200/400" },
  { img: "https://picsum.photos/id/1012/1200/400" },
  { img: "https://picsum.photos/id/1013/1200/400" },
  { img: "https://picsum.photos/id/1014/1200/400" },
  { img: "https://picsum.photos/id/1015/1200/400" },
  { img: "https://picsum.photos/id/1016/1200/400" },
];
</script>
<style scoped>
.visual img {
  width: 100%;
  display: block;
}
</style>
