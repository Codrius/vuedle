<template>
  <b-container fluid class="home-root m-0">
    <b-container fluid="sm">
      <b-jumbotron id="jumbotron1" header="Vuedle" lead="A project by Cody Sewell" text-variant="light" class="pb-3">
          <hr class="my-4">
          <b-row class="text-center">
            <b-col cols="4"><b-button v-b-toggle.accordion-1 variant="dark">Who are you?</b-button></b-col>
            <b-col cols="4"><b-button v-b-toggle.accordion-2 variant="dark">Who am I?</b-button></b-col>
            <b-col cols="4"><b-button v-b-toggle.accordion-3 variant="dark">What is Vuedle?</b-button></b-col>
          </b-row>
          <b-row class="accordion mt-4" role="tablist">
            <b-collapse id="accordion-1" accordion="jumbotron-accordion" role="tabpanel">
              <p class="mb-0 text-center">My name is Cody Sewell.  I'm a budding web developer who lives in Florida, and I am available to do work for you.  You can contact me at <strong>codysewell1@gmail.com</strong></p>
            </b-collapse>
            <b-collapse id="accordion-2" accordion="jumbotron-accordion" role="tabpanel">
              <p class="mb-0 text-center">You're the wonderful individual who landed on this website and are about to be impressed by what I was able to learn in only about a month.</p>
            </b-collapse>
            <b-collapse id="accordion-3" accordion="jumbotron-accordion" role="tabpanel">
              <p class="mb-0 text-center">Vuedle is my portfolio project whose purpose was learning the Redmer Productions development stack.  The result was Vuedle, a Vue based idle game demo, with an Express backend and databased with MongoDB. This website stands as a testament to my initiative and commitment to becoming a valuable member of any development team that would have me.</p>
            </b-collapse>
          </b-row>
      </b-jumbotron>
    </b-container>
  </b-container>
</template>

<script>
</script>

<style scoped lang="scss">
.home-root {
  height: 100vh;
  background-image: url("@/assets/background.png");
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}
#jumbotron1 {
  background-color: rgba(0,0,0,0.5)
}
</style>