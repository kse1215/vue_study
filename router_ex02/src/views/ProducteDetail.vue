<template>
  <div>
    <h1>상품 상세 정보</h1>
    <p>상품 이름 : {{ name }}</p>
    <p>상품 가격 : {{ price }}</p>
    <button @click="goBack">목록으로 돌아가기</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// useRoute() 현재 페이지 정보 가져오기
// 지금 페이지의 주소와 정보 를 가져옴
const route = useRoute();

// useRouter() 다른 페이지로 이동시킴
const router = useRouter();

// url 에서 params 가져요기
const name = ref(route.params.name);
const price = ref(route.params.price);

// 뒤로 돌아가기 기능
const goBack = () => {
  router.back(); //바로 전 페이지로 이동 (브라우저의 뒤로가기와 같음)
};
</script>

<style scoped></style>
