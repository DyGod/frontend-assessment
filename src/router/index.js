import Vue from "vue";
import VueRouter from "vue-router";
import Exercise1 from "../views/Exercise1.vue";
import Exercise2 from "../views/Exercise2.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Exercise 1",
    component: Exercise1
  },
  {
    path: "/ex2",
    name: "Exercise 2",
    component: Exercise2
  },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
