<template>
  <h1>v-bind</h1>
  <div class="section">
    <!-- 예제 1 -->
    <V_bind_ex01 />
    <hr />
    <!-- 예제 2 -->
    <V_bind_ex02 />
    <hr />
    <!-- 예제 3 -->
    <V_bind_ex03 />
    <hr />
    <!-- 예제 4 -->
    <V_bind_ex04 />
    <hr />
  </div>
</template>

<script setup>
import V_bind_ex01 from "./V_bind_ex01.vue";
import V_bind_ex02 from "./V_bind_ex02.vue";
import V_bind_ex03 from "./V_bind_ex03.vue";
import V_bind_ex04 from "./V_bind_ex04.vue";
</script>

<style scoped>
.section {
  display: flex;
}
.section > div {
  flex: 1;
}
</style>
