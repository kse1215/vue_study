<template>
  <div>
    <h2>상품 목록</h2>
    <div v-for="(product, i) in products" :key="i">
      <p>{{ product.name }} - {{ product.price.toLocaleString() }}원</p>
      <!-- v-if 조건 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  { name: "아이스크림", price: 3000, soldOut: false },
  { name: "케이크", price: 15000, soldOut: true },
  { name: "콜라", price: 2000, soldOut: false },
]);
</script>

<style scoped></style>
