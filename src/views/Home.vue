<template>
  <div class="home">
    <div class="columns">
      <div class="column">
        <div class="welcome">
          <p class="hello-there is-size-1">HELLO THERE!</p>
          <br />
          <p class="is-size-2">
            MY NAME IS <span class="has-text-primary">JAKUB</span>
          </p>

          <br />
          <p class="is-size-2">NICE OF YOU TO STOP BY!</p>
        </div>
      </div>
      <div class="column">
        <b-image
          :src="require('@/assets/me.jpg')"
          alt="A picture of me"
          ratio="1by1"
          responsive
          rounded
          custom-class="me-image"
        />
      </div>
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
  font-family: "Rock 3D", cursive;
  color: $primary;
}

.welcome {
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  margin-top: 7em;
}
</style>
