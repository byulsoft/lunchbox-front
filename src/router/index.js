import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import List from "@/views/List";
import Create from "@/views/Create";

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
    path: "/create",
    component: Create
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
