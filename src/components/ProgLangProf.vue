<template>
  <div class="prog-lang-prof">
    <div class="columns">
      <div class="column is-5 is-offset-2">
        <font-awesome-icon
          v-if="icon"
          class="skillpoint has-text-primary"
          :icon="icon"
          size="lg"
        />
        <span class="is-size-5">
          <span v-if="name == 'C++'" class="has-text-primary">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              style="height: 1em"
            />
          </span>
          {{ name }}
        </span>
        <p v-if="frameworks" class="frameworks">
          <span class="has-text-primary">Frameworks:</span>
          <span
            v-for="(framework, index) in frameworks"
            :key="`${name}_${framework}`"
          >
            <span v-if="index" class="has-text-primary">,</span
            ><span> {{ framework }}</span>
          </span>
        </p>
      </div>
      <div class="column is-5">
        <font-awesome-icon
          class="skillpoint has-text-primary"
          v-for="n in proficiency"
          :key="`${n}_${name}`"
          icon="circle"
        />
        <font-awesome-icon
          class="skillpoint has-text-grey-light"
          v-for="n in 5 - proficiency"
          :key="`${n + proficiency}_${name}`"
          icon="circle"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgLangProf",
  props: {
    name: String,
    frameworks: Array,
    icon: Array,
    proficiency: Number,
  },
};
</script>

<style lang="scss">
.prog-lang-prof {
  margin: 1rem 0;
}

.frameworks {
  white-space: nowrap;
  overflow: hidden;
}

.skillpoint {
  margin: 0 1px;
}
</style>
