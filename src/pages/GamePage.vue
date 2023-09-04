<template>
  <div id="game-root">
    <div id="game" class="container text-center col-xxl-4 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12">
      <img class="container-fluid col-12" src="@/assets/logo.png" v-on:click="clicked()"/>
      <div id="stats" class="container-fluid col-12">
        <p>Currency: {{ currency }}</p>
        <div class="operators-container">
          <p>
            Click Power:
            {{ ((1 + clickUpgrades) * clickMultiplier).toFixed(1) }} | Idle Power:
            {{ (idleUpgrades * idleMultiplier).toFixed(1) }}
          </p>
        </div>
        <div class="display-upgrades-container">
          <p>
            Click Upgrades: {{ clickUpgrades }} | Idle Upgrades:
            {{ idleUpgrades }}
          </p>
        </div>
        <div class="display-multipliers-container">
          <p>
            Click Multiplier: {{ clickMultiplier }} | Idle Multiplier:
            {{ idleMultiplier }}
          </p>
        </div>
      </div>
      <div class="buttons-container">
        <div class="upgrade-container">
          <button v-on:click="upgradeClicks([1, clickUpgradeCost])">
            +1CP: {{ clickUpgradeCost }}
          </button>
          <button v-on:click="upgradeIdle([1, idleUpgradeCost])">
            +1IP: {{ idleUpgradeCost }}
          </button>
        </div>
        <div class="reset-container">
          <button v-on:click="reset()">Prestige</button>
          <button v-on:click="fullReset()">Full Reset</button>
        </div>
        <div class="user-action-container">
          <button v-on:click="attemptSave()">Save Game</button>
          <button v-on:click="logOut()">Log Out</button>
        </div>
      </div>
    </div>
  </div>
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
    ...mapActions(["autoSave", "attemptSave", "logOut"]),
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
#game-root {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("@/assets/background.png");
  background-position: center;
  background-size: cover;
  background-color: rgb(71, 71, 71);
}

#game {
  border-left: 4px solid black;
  border-right: 4px solid black;
  box-shadow: 3px 3px 3px black;
  background-color: rgb(100, 100, 100);
  height: 100%;
  padding: 0px;
}

img {
  background-color: grey;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  box-shadow: 3px 3px 3px black;
}


</style>