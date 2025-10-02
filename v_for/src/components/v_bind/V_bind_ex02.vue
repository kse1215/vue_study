<template>
  <div>
    <h2>버튼 색상 바꾸기</h2>
    <!-- v-bind = style -->
    <button
      :style="{
        backgroundColor: btnColor,
        color: btnColor_W,
        padding: '10px',
        border: '2px solid transparent',
        borderRadius: '5px',
      }"
      @click="changColor">
      {{ btnText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 버튼 변수
const btnColor = ref("lightsteelblue");
const btnColor_W = ref("white");
const btnText = ref("클릭하세요");

// 버튼 클릭시 색 변경 함수
const changColor = () => {
  // console.log("click");
  const colors = [
    "cornflowerblue",
    "darkolivegreen",
    "tomato",
    "lightcoral",
    "lightsalmon",
    "mediumpurple",
  ];
  // btnColor.value = colors[1];
  // console.log(colors[Math.floor(Math.random() * colors.length )]);
  // console.log(Math.floor(Math.random() * colors.length ));
  // console.log(colors.length);
  btnColor.value = colors[Math.floor(Math.random() * colors.length)];
};
</script>

<style scoped></style>
