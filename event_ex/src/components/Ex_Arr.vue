<template>
  <div>
    <h1>배열 조작 예제</h1>
    <p>현재 배열 : {{ items }}</p>
    <div class="btn_wrap">
      <button @click="addItem">push() - 추가</button>
      <button @click="removeLastItem">pop() - 마지막 제거</button>
      <button @click="removeFirstItem">shift() - 첫번째 제거</button>
      <button @click="addFirstItem">unshift() - 첫번째 추가</button>
      <button @click="removeAndAddItem">splice() - 요소 변경</button>
      <button @click="sortItems">sort() - 정렬</button>
      <button @click="reverseItems">reverse() - 역순 정렬</button>
      <button @click="filterItems">filter() - "a" 포함된 요소만 필터링</button>
      <button @click="concatItems">concat() - 새로운 배열과 결합</button>
      <button @click="sliceItems">slice() - 인덱스 1~2 요소 추출</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry", "Orange", "Grapes"]);

// push()
const addItem = () => {
  items.value.push("Pineapple");
};

// pop()
const removeLastItem = () => {
  items.value.pop(); // 배열의 마지막 아이템을 제거한다.
};

// shift()
const removeFirstItem = () => {
  items.value.shift(); // 배열의 첫번째 아이템을 제거한다.
};

// unshift()
const addFirstItem = () => {
  items.value.unshift("Strawberry");
};

// splice()
const removeAndAddItem = () => {
  items.value.splice(1, 1, "kiwi"); // (index 번호, delete 갯수, 추가 아이템)
};

// sort()
const sortItems = () => {
  items.value.sort();
};

// reverse()
const reverseItems = () => {
    items.value.reverse()
}

// filter() : "a" 포함된 배열만 필터링
const filterItems = () => {
    items.value = items.value.filter((item)=>{
        // console.log(item);
        return item.includes("a") // includes : 있는지 없는지 확인하는 메서드
    })
}

// concat()
const concatItems = () => {
    items.value = items.value.concat(["Mango" , "peach"])
}

// slice() : 1부터 3 전까지 잘라서 온다.
const sliceItems = () => {
    items.value = items.value.slice(1, 3) // 잘라낼 범위 지정. 시작과 끝을 지정한다.
}
</script>

<style scoped></style>
