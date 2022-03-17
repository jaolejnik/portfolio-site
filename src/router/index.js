import Vue from "vue";
import VueRouter from "vue-router";
import Combined from "../views/Combined.vue";
import Home from "../views/Home.vue";
import ProjectDetails from "../views/ProjectDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Combined,
    children: [
      {
        path: "",
        name: Home.name,
        component: Home,
      },
    ],
  },
  {
    path: "/project-details/",
    name: ProjectDetails.name,
    component: ProjectDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
