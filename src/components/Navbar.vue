<template>
  <nav id="nav" class="level is-mobile">
    <div class="level-item has-text-centered" @click="scrollToSection('home')">
      <router-link to="#home">
        <p>Home</p>
        <font-awesome-icon icon="home" size="lg" />
      </router-link>
    </div>
    <div
      class="level-item has-text-centered"
      @click="scrollToSection('projects')"
    >
      <router-link to="#projects">
        <p>Projects</p>
        <font-awesome-icon icon="folder-open" size="lg" />
      </router-link>
    </div>
    <div class="level-item has-text-centered" @click="scrollToSection('about')">
      <router-link to="#about">
        <p>About me</p>
        <font-awesome-icon icon="address-card" size="lg" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    scrollToSection(sectionID) {
      console.log(sectionID);
      document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
#nav {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  font-size: 1rem;
}

#nav a {
  color: $dark-main;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
