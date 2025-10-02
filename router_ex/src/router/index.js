import { createRouter, createWebHistory } from "vue-router";

// 페이지 가져오기
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Shop from "@/views/Shop.vue";

// 페이지 주소와 연결
const routes = [
  // 이름 뒤에 공백이 있으면(ex. /login ) 공백도 글자로 인식한다.(통일해야함!)
  { path: "/", component: Home }, // /:home
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/shop", component: Shop },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
