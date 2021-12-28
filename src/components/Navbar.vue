<template>
  <div id="nav" class="columns is-mobile" style="margin: 2em">
    <div class="column">
      <router-link to="/">
        <p>Home</p>
        <font-awesome-icon icon="home" size="lg" />
      </router-link>
    </div>
    <div class="column">
      <router-link to="/about">
        <p>About</p>
        <font-awesome-icon icon="address-card" size="lg" />
      </router-link>
    </div>
    <div class="column">
      <router-link to="/projects">
        <p>Projects</p>
        <font-awesome-icon icon="folder-open" size="lg" />
      </router-link>
    </div>
    <div class="column">
      <router-link to="/contact">
        <p>Contact</p>
        <font-awesome-icon icon="envelope" size="lg" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f57e07;
}
</style>
