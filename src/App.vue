<template>
  <div id="app" class="columns">
    <div
      class="column is-offset-2 site-content"
      :class="{ mobile: $utils.isMobile() }"
      style="padding: 5em 0"
    >
      <router-view />
    </div>
    <div v-if="!$utils.isMobile()" class="column is-2">
      <Menu class="menu" />
    </div>
    <div v-else class="navbar is-primary">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Menu,
  },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);

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
  font-family: "Neucha", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-main;
}

.site-content {
  margin: 0 5rem;
}

.menu {
  position: fixed;
}

.navbar {
  position: fixed;
  width: 100%;
  height: 10vh;
  left: 0;
  bottom: 0vh;
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2vh 0;
}
</style>
