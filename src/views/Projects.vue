<template>
  <section class="projects">
    <p class="heading is-size-1 has-text-centered">PROJECTS</p>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <ProjectPreview :project="projects['vr-ship-ud']" />
      </div>
      <div class="tile is-parent is-vertical">
        <ProjectPreview :project="projects['nprr']" />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectPreview from "../components/ProjectPreview.vue";
import projectsData from "@/assets/projects.json";
export default {
  components: { ProjectPreview },
  name: "Projects",

  data() {
    return {
      projects: projectsData,
    };
  },
};
</script>
