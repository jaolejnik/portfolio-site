<template>
  <nav id="nav" class="level">
    <div class="level-item has-text-centered">
      <router-link to="/">
        <p>Home</p>
        <font-awesome-icon icon="home" size="lg" />
      </router-link>
    </div>
    <div class="level-item has-text-centered">
      <router-link to="/about">
        <p>About</p>
        <font-awesome-icon icon="address-card" size="lg" />
      </router-link>
    </div>
    <div class="level-item has-text-centered">
      <router-link to="/projects">
        <p>Projects</p>
        <font-awesome-icon icon="folder-open" size="lg" />
      </router-link>
    </div>
    <div class="level-item has-text-centered">
      <router-link to="/contact">
        <p>Contact</p>
        <font-awesome-icon icon="envelope" size="lg" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
#nav {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  font-size: 3vh;
  margin: 2em 0;
}

#nav a {
  color: $dark-main;
}

#nav a.router-link-exact-active {
  color: $primary;
}
</style>
