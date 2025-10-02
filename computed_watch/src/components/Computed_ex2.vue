<template>
  <div>
    <h2>장바구니</h2>
    <p>상품 가격 : {{ formatNumber(price) }}원</p>
    <p>할인 금액 (20%) : {{ formatNumber(discount) }}원</p>
    <p>세금 (10%) : {{ formatNumber(tax) }}원</p>
    <hr />
    <p>
      <strong>최종 결제금액 : {{ formatNumber(total) }}원</strong>
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

// 천단위 콤마 함수
const formatNumber = (num) => {
  return num.toLocaleString();
};

// 상품 가격
const price = ref(10000);

// 할인 금액 (20%)
const discount = computed(() => {
  return price.value * 0.2;
});

// 세금 (10%)
// ( 상품 가격 - 할인 금액 ) * 0.1
const tax = computed(() => {
  return (price.value - discount.value) * 0.1;
});

// 최종 금액
const total = computed(() => {
  return price.value - discount.value + tax.value;
});
</script>

<style scoped></style>
