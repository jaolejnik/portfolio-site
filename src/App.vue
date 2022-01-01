<template>
  <div id="app" class="columns">
    <div class="column is-offset-2 site-content" style="padding: 5em 0">
      <router-view />
    </div>
    <div class="column is-2">
      <Menu class="menu" />
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    // Navbar,
    Menu,
  },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
    $primary-light,
    $primary-dark,
  ),
  "link": (
    $link,
    $link-invert,
    $link-light,
    $link-dark,
  ),
  "info": (
    $info,
    $info-invert,
    $info-light,
    $info-dark,
  ),
  "success": (
    $success,
    $success-invert,
    $success-light,
    $success-dark,
  ),
  "warning": (
    $warning,
    $warning-invert,
    $warning-light,
    $warning-dark,
  ),
  "danger": (
    $danger,
    $danger-invert,
    $danger-light,
    $danger-dark,
  ),
);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-main;
}

.menu {
  position: fixed;
}
</style>
