<template>
  <div>
    <p>가격 : {{ formatNumber(price) }}원</p>
    <p>세금 : {{ tax }}원</p>
    <p>총합 : {{ formatNumber(total)  }}원</p>
  </div>
</template>

<script setup>
// computed() 계산된 값을 담아두는 함수
// 다른 데이터에 따라 자동으로 값이 바뀌는 계산 전용 변수

import { computed, ref } from "vue";

const price = ref(2500);
const tax = computed(() => {
  return price.value * 0.1;
});
// console.log(tax.value);
const total = computed(() => {
  return price.value + tax.value;
});

// 천단위 콤마 함수
const formatNumber = (num) => {
  return num.toLocaleString();
};
</script>

<style scoped></style>
