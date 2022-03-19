<template>
  <div class="project-details">
    <h1 class="title heading is-1">{{ project.title }}</h1>
    <h3 class="subtitle is-3">{{ project.subtitle }}</h3>

    <section
      v-for="(paragraph, i) in project.description"
      :key="`paragraph${i}`"
      class="is-size-5"
    >
      <h4 class="subheading is-size-4 has-text">{{ paragraph.header }}</h4>
      <p>
        <vue-markdown>{{ paragraph.text }}</vue-markdown>
      </p>
      <br />
      <tweet v-if="paragraph.tweet" class="drawn-border" :id="paragraph.tweet">
        <div class="spinner" />
      </tweet>
      <div class="tile is-ancestor">
        <div
          v-for="(image, j) in paragraph.images"
          :key="`paragraph${i}image${j}`"
          class="tile"
          style="margin: 0.5em"
        >
          <figure class="image is-fullwidth">
            <img class="drawn-border" :src="image" />
          </figure>
        </div>
      </div>
    </section>
    <br />
    <div class="buttons is-centered">
      <button
        class="button is-large is-primary is-outlined"
        @click="$router.go(-1)"
      >
        <p>
          <font-awesome-icon icon="arrow-alt-circle-left" size="lg" />
          Go back
        </p>
      </button>
      <a
        v-if="project.github"
        class="button is-large is-primary"
        :href="project.github"
        target="blank"
      >
        <p>
          <font-awesome-icon :icon="['fab', 'github']" size="lg" /> View
          repository
        </p>
      </a>
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

<style lang="scss">
strong {
  color: $primary !important;
}

em {
  color: $primary !important;
}
</style>
