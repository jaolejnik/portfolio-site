<template>
  <div class="project-preview" @click="redirectToProjectDetails">
    <div class="drawn-border tile is-parent">
      <article class="tile is-child">
        <p class="title">{{ project.title.toUpperCase() }}</p>
        <p class="subtitle">{{ project.subtitle }}</p>
        <figure class="image">
          <img :src="project.thumbnail" />
        </figure>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    project: Object,
    projectPage: String,
  },

  methods: {
    redirectToProjectDetails() {
      console.log(this.$props.projectPage);
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
