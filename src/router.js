import Vue from "vue";
import VueRouter from "vue-router";
import Combined from "./views/Combined.vue";
import ProjectDetails from "./views/ProjectDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Combined.name,
    component: Combined,
  },
  {
    path: "/project-details/:project",
    name: ProjectDetails.name,
    component: ProjectDetails,
    meta: { transitionName: "slide" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    {
      if (from.name == ProjectDetails.name) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ el: to.hash });
          }, 600);
        });
      }
    }
  },
});

export default router;
