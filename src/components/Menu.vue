<template>
  <aside id="nav" class="menu">
    <img
      class="me-image"
      :src="require('@/assets/me.png')"
      alt="A picture of me"
    />

    <ul class="menu-list">
      <p class="menu-label">BROWSE</p>
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
      <p class="menu-label">Contact me</p>
    </ul>
    <div class="contact">
      <a
        class="contact-link"
        href="mailto:olejnik.jakub@protonmail.com"
        target="_blank"
      >
        <font-awesome-icon icon="envelope" />
      </a>
      <a
        class="contact-link"
        href="https://github.com/jaolejnik"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        class="contact-link"
        href="https://www.linkedin.com/in/jakub-olejnik-85a686203/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>
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
  font-size: 1rem;
  margin: 2rem 0;
}

#nav a {
  color: $dark-main;
}

#nav a.router-link-exact-active {
  color: $primary;
}

#nav div.contact {
  margin-top: 1rem;
  margin: 1rem 2rem;
}
.contact-link {
  margin-right: 10px;
}

.me-image {
  margin-bottom: 1rem;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 0.5rem $primary;
}
</style>
