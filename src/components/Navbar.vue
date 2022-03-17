<template>
  <b-navbar fixed-top shadow type="is-primary">
    <template #brand>
      <b-navbar-item
        @click="scrollToSection(currentHash)"
        :to="'#' + currentHash"
      >
        <font-awesome-icon :icon="hashToIcon(currentHash)" size="lg" />
        <p class="is-capitalized" style="margin: 0 0.3rem">
          {{ currentHash }}
        </p>
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item @click="scrollToSection('home')">
        <font-awesome-icon icon="home" size="lg" />
        Home
      </b-navbar-item>
      <b-navbar-item @click="scrollToSection('about')">
        <font-awesome-icon icon="address-card" size="lg" />
        About
      </b-navbar-item>
      <b-navbar-item @click="scrollToSection('projects')">
        <font-awesome-icon icon="folder-open" size="lg" />
        Projects
      </b-navbar-item>
    </template>

    <template #end>
      <hr />
      <b-navbar-item
        class="contact-link"
        href="https://github.com/jaolejnik"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github']" size="lg" /> CHECK OUT MY
        GITHUB
      </b-navbar-item>

      <b-navbar-item
        class="contact-link"
        href="https://www.linkedin.com/in/jakub-olejnik-85a686203/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" /> LET'S
        CONNECT
      </b-navbar-item>

      <b-navbar-item
        class="contact-link"
        :href="`mailto:${mail}`"
        target="_blank"
      >
        <font-awesome-icon icon="envelope" size="lg" /> EMAIL ME AT:
        <p style="font-family: 'Neucha', cursive">
          {{ mail }}
        </p>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      currentHash: "home",
      mail: "jaolejnik@protonmail.com",
    };
  },

  methods: {
    hashToIcon(hash) {
      switch (hash) {
        case "home":
          return "home";
        case "about":
          return "address-card";
        case "projects":
          return "folder-open";
      }
    },

    scrollToSection(sectionID) {
      document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
    },
  },

  watch: {
    $route() {
      this.currentHash = this.$route.hash.replace("#", "");
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
