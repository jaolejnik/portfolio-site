<template>
  <div class="edu-exp">
    <div class="columns">
      <div class="column is-2 is-offset-2 has-text-primary">
        <p class="is-size-5">
          {{ yearRange.join("-") }}
        </p>
      </div>
      <div class="column">
        <p class="is-size-4">{{ name }}</p>
        <p class="is-size-6">{{ subname }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgLangProf",
  props: {
    name: String,
    subname: String,
    yearRange: Array,
    description: String,
  },
};
</script>

<style lang="scss">
.edu-exp {
  margin: 1rem 0;
}
</style>
