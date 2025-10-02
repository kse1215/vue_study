<template>
    <div>
        <input v-model="name" @input="updateMessage1" type="text" placeholder="이름을 입력해 주세요">
        <input v-model="message" @input="updateMessage2" type="text" placeholder="메세지 입력">
        <p>이름 : {{ name }}</p>
        <p>입력 내용 : {{ message }}</p>
    </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'; 

const message = ref("")
const name = ref("")

// 한글 이슈(한글자 늦게 입력되는 이슈)
const updateMessage1 = (event)=>{
    nextTick(()=>{
        name.value = event.target.value
    })
}
const updateMessage2 = (event)=>{
    nextTick(()=>{
        message.value = event.target.value
    })
}
</script>

<style scoped></style>