<template>
  <div class="container">
    <Event />
    <Form_ex />
  </div>
  <h2>Array</h2>
  <br />
  <div class="container">
    <div class="contents">
      <button @click="showArr = !showArr">{{ showArr ? "닫기" : "배열예제보기" }}</button>
      <Ex_Arr v-if="showArr" />
    </div>
    <div class="contents">
      <button @click="showTodoList = !showTodoList">{{ showTodoList ? "닫기" : "todoList 보기" }}</button>
      <!-- <TodoList v-if="showTodoList"/> -->
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Event from "./components/Event.vue";
import Form_ex from "./components/Form_ex.vue";
import Ex_Arr from "./components/Ex_Arr.vue";
import TodoList from "./components/TodoList.vue";

const showArr = ref(false);
const showTodoList = ref(false);
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
.container div {
  flex: 1;
  background-color: antiquewhite;
}
</style>
