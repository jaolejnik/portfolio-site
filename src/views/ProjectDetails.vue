<template>
  <div class="project-details has-text-justified">
    <h1 class="title heading is-1">{{ project.title }}</h1>
    <h3 class="subtitle is-3">{{ project.subtitle }}</h3>
    <section
      v-for="(paragraph, i) in project.description"
      :key="`paragraph${i}`"
      class="is-size-5"
    >
      <h4 class="subheading is-size-4 has-text">{{ paragraph.header }}</h4>
      <p>{{ paragraph.text }}</p>
      <br />
      <div class="tile is-ancestor">
        <div
          v-for="(image, j) in paragraph.images"
          :key="`paragraph${i}image${j}`"
          class="tile"
          style="margin: 0.5em"
        >
          <figure class="image">
            <img class="drawn-border" :src="image" />
          </figure>
        </div>
      </div>
    </section>
    <br />
    <div class="has-text-centered">
      <button class="button is-large is-primary" @click="$router.go(-1)">
        <p>
          <font-awesome-icon icon="arrow-alt-circle-left" size="lg" />
          Go back
        </p>
      </button>
    </div>
  </div>
</template>

<script>
import projectsData from "@/assets/projects.json";
export default {
  name: "ProjectDetails",

  data() {
    return {
      projects: projectsData,
      projectName: window.location.href.split("project-details/")[1],
    };
  },

  computed: {
    project() {
      return this.projects[this.projectName];
    },

    projectArray() {
      return Object.keys(this.projects);
    },

    projectCount() {
      return this.projectArray.length;
    },

    projectID() {
      return this.projectArray.indexOf(this.projectName);
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
