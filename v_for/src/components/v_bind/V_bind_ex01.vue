<template>
  <div>
    <h2>v-bind 시작</h2>
    <!-- v-bind : HTML 속성에 변수(데이터)를 연결해준다. (묶어준다.) -->
    <!-- <img src="" alt=""> -->
    <img :src="img1" alt="이미지" />
    <img :src="img2" alt="이미지" />
  </div>
</template>

<script setup>
import { ref } from "vue";

// 이미지 주소를 변수로 저장
const img1 = ref("https://picsum.photos/id/1020/200/150");
const img2 = ref("https://picsum.photos/id/1021/200/150");
</script>

<style scoped></style>
