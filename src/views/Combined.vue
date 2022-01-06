<template>
  <div class="combined">
    <transition appear :name="transitionName" mode="out-in">
      <div v-if="show">
        <Home id="home" />
        <!-- <Projects id="projects" /> -->
        <About id="about" />
      </div>
    </transition>
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
// import Projects from "./Projects.vue";

const DEFAULT_TRANSITION = "slide-fade";

export default {
  name: "Combined",

  components: {
    Home,
    About,
    // Projects,
  },

  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      show: true,
    };
  },

  created() {
    window.addEventListener("load", () => {
      const sections = document.querySelectorAll("section");

      document.addEventListener("scroll", () => {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();

          if (
            rect.top > 10 &&
            rect.top < 160 &&
            window.location.hash !== "#" + section.id
          ) {
            this.$router.push({ hash: `#${section.id}` });
          }
        });
      });
    });
  },
};
</script>

<style lang="scss">
.heading {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  margin-top: 5rem;
}

.subheading {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  margin-top: 2.5rem;
}
</style>
