<template>
  <div class="combined">
    <transition appear :name="transitionName" mode="out-in">
      <Home v-if="homeVisible" id="home" />
    </transition>
    <transition appear :name="transitionName" mode="out-in">
      <Projects v-if="projectsVisible" id="projects" />
    </transition>
    <transition appear :name="transitionName" mode="out-in">
      <About v-if="aboutVisible" id="about" />
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
      homeVisible: true,
      aboutVisible: true,
      projectsVisible: true,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // TODO complete auto anchor change
      console.log(location);
      console.log(event);
    },
  },
};
</script>

<style lang="scss">
.heading {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  margin-top: 5rem;
}
</style>
