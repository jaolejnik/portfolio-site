<template>
  <div class="home has-text-centered">
    <div class="columns">
      <div class="column is-6 is-offset-1">
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
      <div class="column is-3 is-6-mobile is-offset-3-mobile">
        <b-image
          :src="require('@/assets/me.jpg')"
          alt="A picture of me"
          ratio="1by1"
          responsive
          custom-class="me-image"
        />
      </div>
    </div>
    <br />
    <p class="welcome" :class="{ mobile: $utils.isMobile() }">
      FEEL FREE TO TAKE A LOOK AROUND!
    </p>
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
  font-size: 6vh;
  padding: 0.3em 0 0.5em 0;
}

.hello-there.mobile {
  font-size: 10vw;
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

.me-image {
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 0.5rem $primary;
}
</style>
