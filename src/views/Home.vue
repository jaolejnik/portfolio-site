<template>
  <section class="home has-text-centered">
    <p class="hello-there" :class="{ mobile: $utils.isMobile() }">
      HELLO THERE!
    </p>
    <img
      v-if="$utils.isMobile()"
      class="me-image"
      :src="require('@/assets/me.png')"
      alt="A picture of me"
    />
    <div class="welcome" :class="{ mobile: $utils.isMobile() }">
      <p>
        MY NAME IS
        <span
          class="has-text-primary"
          style="font-family: 'Permanent Marker', cursive"
          >JAKUB</span
        >
      </p>
      <p>NICE OF YOU TO STOP BY!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.hello-there {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  font-size: 5rem;
  padding: 0.3em 0 0.5em 0;
}

.hello-there.mobile {
  padding: 0.5rem;
  font-size: 4rem;
}

.welcome {
  font-weight: bold;
  font-size: 4vh;
}

.welcome.mobile {
  padding: 0 1rem;
  font-size: 7vw;
}
</style>
