<template>
  <div class="wrap">
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/reser">예약하기</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  width: 300px;
  margin: auto;
}
</style>
