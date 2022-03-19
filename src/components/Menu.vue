<template>
  <aside id="menu" class="menu">
    <img
      class="drawn-border"
      :src="require('@/assets/me.png')"
      alt="A picture of me"
    />

    <ul class="menu-list">
      <p class="menu-label">BROWSE</p>
      <li @click="scrollToSection('home')">
        <router-link to="/#home" replace>
          <font-awesome-icon icon="home" size="lg" />
          Home
        </router-link>
      </li>

      <li @click="scrollToSection('about')">
        <router-link to="/#about" replace>
          <font-awesome-icon icon="address-card" size="lg" />
          About me
        </router-link>
      </li>

      <li @click="scrollToSection('projects')">
        <router-link to="/#projects" replace>
          <font-awesome-icon icon="folder-open" size="lg" />
          Projects
        </router-link>
      </li>

      <div class="footnote">
        <p class="menu-label">Contact me</p>

        <li>
          <a
            class="contact-link"
            href="https://github.com/jaolejnik"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" /> CHECK OUT
            MY GITHUB
          </a>
        </li>

        <li>
          <a
            class="contact-link"
            href="https://www.linkedin.com/in/jakub-olejnik-85a686203/"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" /> LET'S
            CONNECT
          </a>
        </li>

        <li>
          <a class="contact-link" :href="`mailto:${mail}`" target="_blank">
            <font-awesome-icon icon="envelope" size="lg" /> EMAIL ME AT:
            <p class="has-text-centered" style="font-family: 'Neucha', cursive">
              {{ mail }}
            </p>
          </a>
        </li>
      </div>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      mail: "jaolejnik@protonmail.com",
    };
  },

  methods: {
    scrollToSection(sectionID) {
      document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
.drawn-border {
  margin-bottom: 1rem;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 0.5rem $primary;
}

#menu {
  font-weight: bold;
  font-size: 1rem;
  margin: 2rem 0;
}

#menu a {
  color: $dark-main;
}

#menu a.router-link-exact-active {
  color: $primary;
}

.footnote {
  position: fixed;
  bottom: 1rem;
}

.contact-link {
  font-size: 0.8rem;
}
</style>
