<template>
  <section class="about">
    <p class="heading is-size-1 has-text-centered">ABOUT ME</p>
    <p class="is-size-5">
      My name is Jakub Olejnik, I am
      {{ $date($date("29-09-1998", "DD-MM-YYYY")).from($date(), true) }}
      old and I come from Poland. I am a
      <span class="has-text-primary">VR developer</span>.
      <br />
      <br />
      Video games in all forms and shapes are my biggest passion. I had always
      adored motion controlled games and I still do to this very day. It was
      only natural for me to develop immense interest in virtual and augmented
      reality. I believe that this technology will revolutionise not only
      digital entertainment, but also the way people work across a variety of
      fields such as architecture, 3D modelling or manufacturing.
      <br />
      <br />
      At the moment I am learning and refining all the required skills at
      <span class="has-text-primary">Lund University</span>, where I am doing my
      master's in
      <span class="has-text-primary">Virtual and Augmented Reality</span> as the
      first year of this programme ever
      <i
        >(read my impressions
        <a
          href="https://www.lunduniversity.lu.se/lubas/i-uoh-lu-tavar/what-jakub-says-about-programme-virtual-reality-and-augmented-reality"
          target="_blank"
        >
          here</a
        >) </i
      >. I am putting all this knowlegde to a good use in my professional
      position at <span class="has-text-primary">Axis Communications</span>,
      where I work as a <span class="has-text-primary">VR Student Worker</span>.
    </p>

    <p class="subheading is-size-4 has-text-centered">EXPERIENCE</p>
    <edu-exp
      name="VR Student Worker"
      subname="Axis Communications"
      :yearRange="['2022', 'PRESENT']"
    />
    <edu-exp
      name="Continuous Integration Working Student"
      subname="Nokia Solutions and Networks"
      :yearRange="['2020', '2021']"
    />
    <p class="subheading is-size-4 has-text-centered">EDUCATION</p>
    <edu-exp
      name="Master’s Degree: Virtual and Augmented Reality"
      subname="Lund University"
      :yearRange="['2021', 'PRESENT']"
    />
    <edu-exp
      name="Bachelor’s Degree: Control Engineering and Robotics"
      subname="Wroclaw University of Science and Technology"
      :yearRange="['2017', '2021']"
    />
    <edu-exp
      name="Deep Learning"
      subname="SDU Odense International Summer School"
      :yearRange="['2019']"
    />

    <p class="subheading is-size-4 has-text-centered">PROGRAMMING SKILLS</p>
    <div class="columns is-mobile">
      <div class="column">
        <prog-lang-prof
          name="Python"
          :frameworks="['Django']"
          :icon="['fab', 'python']"
          :proficiency="4"
        />
        <prog-lang-prof name="C++" :proficiency="3" :frameworks="['OpenGL']" />
        <prog-lang-prof
          name="JavaScript"
          :frameworks="['Vue']"
          :icon="['fab', 'js']"
          :proficiency="3"
        />
        <prog-lang-prof
          name="Shell"
          :icon="['fas', 'terminal']"
          :proficiency="3"
        />
        <prog-lang-prof name="C#" :proficiency="2" />
      </div>

      <div class="column">
        <prog-lang-prof
          name="Unity"
          :icon="['fab', 'unity']"
          :proficiency="2"
        />
        <prog-lang-prof
          name="SQL"
          :icon="['fas', 'database']"
          :proficiency="2"
        />
        <prog-lang-prof name="CSS" :icon="['fab', 'css3']" :proficiency="2" />
        <prog-lang-prof name="HTML" :icon="['fab', 'html5']" :proficiency="2" />
        <prog-lang-prof
          name="Docker"
          :icon="['fab', 'docker']"
          :proficiency="1"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProgLangProf from "../components/ProgLangProf.vue";
import EduExp from "../components/EduExp.vue";

export default {
  name: "About",
  components: { ProgLangProf, EduExp },
};
</script>
