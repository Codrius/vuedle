<template>
  <b-container fluid class="game-root m-0">
    <b-row class="vertical-aligner" align-v="center">
      <b-container fluid class="growth-limiter">
        <b-container fluid="sm" class="game text-center text-light px-0">
          <b-container fluid class="clickzone" v-on:click="clicked()">
            <img class="container-fluid py-4" src="@/assets/logo.png"/>
          </b-container>
          <b-container fluid class="stats py-2">
            <b-row class="py-2"><b-col>Currency: {{ currency }}</b-col></b-row>
            <b-row class="py-2">
              <b-col>Click Power: {{ ((1 + clickUpgrades) * clickMultiplier).toFixed(1) }}</b-col>
              <b-col>Idle Power: {{ (idleUpgrades * idleMultiplier).toFixed(1) }}</b-col>
            </b-row>
            <b-row class="py-2">
              <b-col>Click Upgrades: {{ clickUpgrades }}</b-col>
              <b-col>Idle Upgrades: {{ idleUpgrades }}</b-col>
            </b-row>
            <b-row class="py-2">
              <b-col>Click Multiplier: {{ clickMultiplier }}</b-col>
              <b-col>Idle Multiplier: {{ idleMultiplier }}</b-col>
            </b-row>
          </b-container>
          <b-container fluid class="buttons py-2">
            <b-row class="py-2">
              <b-col><b-button variant="dark" v-on:click="upgradeClicks([1, clickUpgradeCost])">+1CP: {{ clickUpgradeCost }}</b-button></b-col>
              <b-col><b-button variant="dark" v-on:click="upgradeIdle([1, idleUpgradeCost])">+1IP: {{ idleUpgradeCost }}</b-button></b-col>
            </b-row>
            <b-row class="py-2">
              <b-col><b-button variant="dark" v-on:click="reset()">Prestige</b-button></b-col>
              <b-col><b-button variant="dark" v-on:click="fullReset()">Full Reset</b-button></b-col>
            </b-row>
          </b-container>
        </b-container>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "GamePage",
  data() {
    return {
      gameTick: -1,
      autoSaver: -1,
    };
  },
  computed: {
    ...mapGetters([
      "currency",
      "clickUpgrades",
      "idleUpgrades",
      "clickMultiplier",
      "idleMultiplier",
      "username",
      "userid"
    ]),

    // These are the formulas to calculate the slowly creeping exponential cost of upgrades
    clickUpgradeCost: function () {
      return (1.01 ** (10 * this.clickUpgrades) * 50).toFixed(0);
    },
    idleUpgradeCost: function () {
      return (1.01 ** (10 * this.idleUpgrades) * 50).toFixed(0);
    },
  },
  methods: {
    ...mapMutations([
      "clicked",
      "perTenthSecond",
      "upgradeClicks",
      "upgradeIdle",
      "upgradeClickMultiplier",
      "upgradeIdleMultiplier",
      "reset",
      "fullReset",
    ]),
    ...mapActions(["autoSave"]),
  },
  mounted() {
    // Create an auto saver and grant the player idle power per second currency
    this.gameTick = setInterval(this.perTenthSecond, 100);
    this.autoSaver = setInterval(this.autoSave, 30000);
  },
  beforeDestroy() {
    // Stop the interval functions while not playing the game
    clearInterval(this.gameTick);
    clearInterval(this.autoSave);
  },
};
</script>

<style scoped lang="scss">
.game-root {
  height: calc(100vh - 56.5px);
  background-image: url("@/assets/background.png");
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}

.vertical-aligner {
height: calc(100vh - 56.5px);
}

.game {
  border-left: 4px solid black;
  border-right: 4px solid black;
  background-color: rgba(0, 0, 0, 0.75);
}

.growth-limiter {
    max-width: 960px;
}

img {
  max-width: calc(100vh - 340.5px);
}

.clickzone {
  background-color: rgba(0, 0, 0, 0.3);
}

.stats {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
</style>