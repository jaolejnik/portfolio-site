<template>
  <div class="about has-text-justified">
    <p class="heading is-size-1 has-text-centered">ABOUT ME</p>
    <p class="is-size-5">
      My name is Jakub Olejnik, I am
      {{ $date($date("29-09-1998", "MM-DD-YYYY")).from($date(), true) }}
      old and I come from Poland. I have graduated from Wroclaw University of
      Science and Technology with a bachelor’s degree in Control Engineering and
      Robotics, and I am currently doing my master’s degree in Virtual and
      Augmented Reality at Lund University. I have over a year of professional
      experience as a full-stack developer, which I gained while working at
      Nokia as Continuous Integration Working Student.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.about {
  margin-top: 1000px;
}
</style>
