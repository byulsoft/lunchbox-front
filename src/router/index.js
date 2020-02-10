import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import List from "@/views/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/",
    redirect: "/login"
  }
];

const router = new VueRouter({
  routes
});

export default router;
