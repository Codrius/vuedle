<template>
  <div class="home-root">
    <div class="page-contents">
      <h1>Hi! Welcome to Vuedle!</h1>
      <h2>What is Vuedle?</h2>
      <p>
        Vuedle is my portfolio project whose purpose was learning the Redmer
        Productions development stack. The result was Vuedle, a Vue based idle
        game demo, with an Express backend, databased with MongoDB. This website
        stands as a testament to my initiative and commitment to becoming a
        valuable member of the Redmer Productions team.
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.home-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}
.page-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(100, 100, 100);
  height: 100vh;
  width: 40vw;
  min-width: 600px;
  border-left: 4px solid black;
  border-right: 4px solid black;
  box-shadow: 3px 3px 3px black;
}
h1 {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(40, 173, 100);
  border: 3px solid black;
  box-shadow: 3px 3px 3px black;
}
h2 {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(77, 77, 185);
  border: 3px solid black;
  box-shadow: 3px 3px 3px black;
}
p {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 98%;
}
</style>