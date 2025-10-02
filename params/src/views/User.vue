<template>
  <div class="card">
    <h2>👧유저 프로필</h2>
    <p>유저 이름 : {{ username }}</p>
    <p>자기 소개 : {{ userBio }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const username = route.params.username
const users = {
  Kim: { bio: "안녕하세요! 저는 김씨에요 😀" },
  sara: { bio: "저는 여행을 좋아하는 Sara에요 🌍" },
};
const userBio = users[username].bio // 이 수식을 쓰려면 위에 const username이 필요
</script>

<style lang="scss" scoped>
@use "../assets/styles/card" as *;
</style>
