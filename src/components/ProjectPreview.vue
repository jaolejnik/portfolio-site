<template>
  <div class="project-preview" @click="redirectToProjectDetails">
    <div class="drawn-border tile is-parent">
      <div class="tile is-child">
        <p class="title">
          {{ project.title.toUpperCase() }}
        </p>
        <p class="subtitle">{{ project.subtitle }}</p>
        <figure class="image">
          <img :src="project.thumbnail" />
        </figure>
      </div>
      <br />
      <p class="has-text-primary has-text-centered is-size-4">
        <font-awesome-icon icon="arrow-alt-circle-right" size="lg" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    project: Object,
  },

  methods: {
    redirectToProjectDetails() {
      this.$router.push({
        name: "ProjectDetails",
        params: { project: this.project.name },
      });
    },
  },
};
</script>

<style lang="scss">
.project-preview {
  transition: 0.15s linear;
}
.project-preview:hover {
  transform: scale(1.01);
  cursor: pointer;
}
</style>
