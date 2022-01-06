<template>
  <section class="about has-text-justified">
    <p class="heading is-size-1 has-text-centered">ABOUT ME</p>
    <p class="is-size-5">
      My name is Jakub Olejnik, I am
      {{ $date($date("29-09-1998", "DD-MM-YYYY")).from($date(), true) }}
      old and I come from Poland. I am an aspiring
      <span class="has-text-primary">full-stack developer</span>.
      <br />
      Video games in all forms and shapes are my biggest passion. I had always
      adored motion controlled games and I still do to this very day. It was
      only natural for me to develop immense interest in virtual and augmented
      reality. I believe that this technology will revolutionise not only
      digital entertainment, but also the way people work across a variety of
      fields such as architecture, 3D modelling or manufacturing.
    </p>

    <p class="subheading is-size-4 has-text-centered">EXPERIENCE</p>
    <edu-exp
      name="Continuous Integration Working Student"
      subname="Nokia Solutions and Networks Sp.z.o.o"
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
        <prog-lang-prof name="C++" :proficiency="3" />
        <prog-lang-prof name="HTML" :icon="['fab', 'html5']" :proficiency="3" />
        <prog-lang-prof
          name="SQL"
          :icon="['fas', 'database']"
          :proficiency="2"
        />
        <prog-lang-prof name="PHP" :icon="['fab', 'php']" :proficiency="1" />
      </div>

      <div class="column">
        <prog-lang-prof
          name="JavaScript"
          :frameworks="['Vue', 'React']"
          :icon="['fab', 'js']"
          :proficiency="3"
        />
        <prog-lang-prof
          name="Shell"
          :icon="['fas', 'terminal']"
          :proficiency="3"
        />
        <prog-lang-prof name="CSS" :icon="['fab', 'css3']" :proficiency="2" />

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
