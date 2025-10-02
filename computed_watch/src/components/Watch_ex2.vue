<template>
  <div>
    <button @click="score++">점수 올리기</button>
    <button @click="score--">점수 내리기</button>
    <hr />
    <p>현재 점수 : {{ score }}점</p>
    <p>이전 점수 : {{ oldScore }}점</p>
    <p>새 점수 : {{ newScore }}점</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// 1. 감시할 값 (현재 점수)
const score = ref(0);
// 이전 점수
const oldScore = ref(""); // 변경전 값을 저장
// 새로운 점수
const newScore = ref(""); // 변경후 값을 저장

// 2. watch()로 점수를 감시하기
watch(score, (newVal, oldVal) => {
  console.log("점수가 바뀌었어요~");
  console.log(`이전 점수 : ${oldVal} => 새 점수 : ${newVal}`);
  if (newVal >= 10) {
    alert("우와, 점수가 10점을 넘었어요. 축하드려요~");
  }
  oldScore.value = oldVal; // 화면에 보이도록 ref에 저장
  newScore.value = newVal; // 화면에 보이도록 ref에 저장
});
</script>

<style scoped></style>
