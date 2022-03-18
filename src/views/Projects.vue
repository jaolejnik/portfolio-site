<template>
  <section class="projects">
    <p class="heading is-size-1 has-text-centered">PROJECTS</p>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical is-7">
        <ProjectPreview :project="projects['vr-ship-ud']" />
        <ProjectPreview :project="projects['flat-earthers-dream']" />
      </div>
      <div class="tile is-parent is-vertical">
        <div class="tile is-parent">
          <div class="tile is-parent">
            <ProjectPreview :project="projects['nn-line-follower']" />
          </div>
          <div class="tile is-parent">
            <ProjectPreview :project="projects['video-game-calendar']" />
          </div>
        </div>
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
