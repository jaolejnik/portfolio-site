import Vue from "vue";
import VueRouter from "vue-router";
import Combined from "../views/Combined.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Combined.name,
    component: Combined,
    children: [
      {
        path: "",
        name: Home.name,
        component: Home,
      },
      {
        path: "#about",
        name: About.name,
        component: About,
      },
      {
        path: "#projects",
        name: Projects.name,
        component: Projects,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
