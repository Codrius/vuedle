<template>
  <b-container fluid class="home-root p-0 m-0">
    <b-container fluid class="growth-limiter p-0">
      <b-container fluid="sm" class="p-0 m-0">
        <b-jumbotron id="jumbotron1" header="Vuedle" lead="A project by Cody Sewell" text-variant="light" class="pb-3">
            <hr class="my-4">
            <b-row class="text-center">
              <b-col cols="4"><b-button v-b-toggle.accordion-1 variant="dark">Who am I?</b-button></b-col>
              <b-col cols="4"><b-button v-b-toggle.accordion-2 variant="dark">Who are you?</b-button></b-col>
              <b-col cols="4"><b-button v-b-toggle.accordion-3 variant="dark">What is Vuedle?</b-button></b-col>
            </b-row>
            <b-row class="accordion mt-4" role="tablist">
              <b-collapse id="accordion-1" accordion="jumbotron-accordion" role="tabpanel">
                <p class="px-2 mb-0 text-center">My name is Cody Sewell.  I'm a budding web developer who lives in Florida, and available to do work for you.  You can contact me at <strong>codysewell1@gmail.com</strong></p>
              </b-collapse>
              <b-collapse id="accordion-2" accordion="jumbotron-accordion" role="tabpanel">
                <p class="px-2 mb-0 text-center">You're the wonderful individual who landed on this website, and might hopefully give me some feedback on what I can improve around here.  You can find my email address in <strong>"Who am I?"</strong> if you have any suggestions!</p>
              </b-collapse>
              <b-collapse id="accordion-3" accordion="jumbotron-accordion" role="tabpanel">
                <p class="px-2 mb-0 text-center">Vuedle is my portfolio project whose purpose was learning a web development full stack.  This website was the result; a Vue based frontend with an Express backend, databased using MongoDB. This project stands as a testament to my initiative and ability to become a valuable member of any development team that would have me.</p>
              </b-collapse>
            </b-row>
        </b-jumbotron>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
</script>

<style scoped lang="scss">
.home-root {
  height: calc(100vh - 56.5px);
  background-image: url("@/assets/background.png");
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}

#jumbotron1 {
  background-color: rgba(0,0,0,0.5)
}

.growth-limiter {
  max-width: 720px;
}
</style>