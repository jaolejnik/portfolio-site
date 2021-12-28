<template>
  <div class="home">
    <div class="columns">
      <div class="column">
        <div class="welcome">
          <p class="is-size-1">
            <b>HELLO THERE!</b>
          </p>
          <br />
          <p class="is-size-3">MY NAME IS <b>JAKUB</b></p>
          <p class="is-size-3">NICE OF YOU TO STOP BY</p>
        </div>
      </div>
      <div class="column">
        <b-image
          :src="require('@/assets/me.jpg')"
          alt="A picture of me"
          ratio="1by1"
          rounded
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

<style>
.welcome {
  margin-top: 7em;
}
</style>
