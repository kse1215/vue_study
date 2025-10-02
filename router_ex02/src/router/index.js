import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Products from "@/views/Products.vue";
import ProducteDetail from "@/views/ProducteDetail.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";

// 페이지 주소 연결
const routes = [
    {path : "/", component: Home},
    {path : "/about", component: About},
    {path : "/products", component: Products},
    {path : "/products/:name/:price", component: ProducteDetail},
    {path : "/login", component: Login},
    {path : "/signup", component: Signup},
]

const router = createRouter({
    history : createWebHistory(),
    routes // 경로 정의
});

export default router
