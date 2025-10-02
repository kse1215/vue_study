<template>
  <!-- <p>{{ count }}</p> -->
  <p>{{ message }}</p>
  <p>{{ myName }}</p>

  <!-- @ : event 역할 -->
  <button @click="changeMessage">글자바꾸기</button>
  <button @click="changeName">이름 뜻 살펴보기</button>

  <!-- <button @click="count++">눌러보세요+ {{ count }}</button> -->
  <!-- <button @click="count1--">눌러보세요- {{ count1 }}</button> -->
  <button @click="increase">올라가요 {{ count }}</button>
  <button @click="increase1">내려가요 {{ count1 }}</button>
</template>

<script setup>
// ref() - 반응형 변수
// vue가 값을 기억하고, 그 값이 바뀌면 화면도 자동으로 바뀐다.
import { ref } from "vue";

const count = ref(0);
// console.log(count);
// console.log(count.value);
const count1 = ref(0);
const message = ref("안녕하세요🐣");
const myName = ref("김서은");

// 더하기 기능 함수
function increase() {
  count.value++;
}

// 빼기 기능 함수
function increase1() {
  count1.value--;
}

// 글자 바꾸기 함수
function changeMessage() {
  // message.value = "만나서 반가워요🐤"
  if (message.value === "안녕하세요🐣") {
    message.value = "만나서 반가워요🐤";
  } else {
    message.value = "안녕하세요🐣";
  }
}

// 이름 바꾸기 함수
function changeName() {
  if (myName.value === "김서은") {
    myName.value = "새벽 물소리라는 뜻입니다💧";
  } else {
    myName.value = "김서은";
  }
}
</script>

<style scoped></style>
