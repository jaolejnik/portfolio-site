<template>
  <aside id="nav" class="menu">
    <ul class="menu-list">
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home" size="lg" />
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="address-card" size="lg" />
          About
        </router-link>
      </li>
      <li>
        <router-link to="/projects">
          <font-awesome-icon icon="folder-open" size="lg" />
          Projects
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <font-awesome-icon icon="envelope" size="lg" />
          Contact
        </router-link>
      </li>
    </ul>
  </aside>
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
