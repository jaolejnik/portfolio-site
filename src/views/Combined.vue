<template>
  <div class="combined">
    <transition appear :name="transitionName" mode="out-in">
      <Home v-if="homeVisible" />
    </transition>
    <transition appear :name="transitionName" mode="out-in">
      <About v-if="aboutVisible" />
    </transition>
    <transition appear :name="transitionName" mode="out-in">
      <Projects v-if="projectsVisible" />
    </transition>
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";

const DEFAULT_TRANSITION = "slide-fade";

export default {
  name: "Combined",

  components: {
    Home,
    About,
    Projects,
  },

  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      homeVisible: false,
      aboutVisible: false,
      projectsVisible: false,
    };
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  },

  mounted() {
    setTimeout(() => {
      this.homeVisible = true;
      this.aboutVisible = true;
      this.projectsVisible = true;
    }, 500);
  },
};
</script>

<style></style>
