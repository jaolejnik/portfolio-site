<template>
  <div class="home has-text-centered">
    <p class="hello-there" :class="{ mobile: $utils.isMobile() }">
      HELLO THERE!
    </p>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.hello-there {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  // color: $primary;
  font-size: 5rem;
  padding: 0.3em 0 0.5em 0;
}

.hello-there.mobile {
  // font-size: 10vw;
  padding: 0.5rem;
}

.welcome {
  // font-family: "Permanent Marker", cursive;
  font-family: "Neucha", cursive;
  font-weight: bold;
  font-size: 4vh;
}

.welcome.mobile {
  padding: 0 1rem;
  font-size: 7vw;
}
</style>
