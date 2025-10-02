<template>
  <div class="wrap">
    <!-- v-for 공부 -->
    <V_for />
    <hr />
    <!-- v-bind 공부 -->
    <V_bind />
  </div>
</template>

<script setup>
import V_bind from "./components/v_bind/V_bind.vue";
import V_for from "./components/v_for/V_for.vue";
</script>

<style scoped>
.wrap > hr {
  border: 0px;
  border-top: 3px solid gray;
}
</style>
