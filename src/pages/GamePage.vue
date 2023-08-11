<template>
  <div class="game-root">
    <div class="game">
      <img
        src="@/assets/logo.png"
        width="450"
        height="450"
        v-on:click="clicked()"
      />
      <p>Currency: {{ currency }}</p>
      <div class="operators-container">
        <p>
          Click Power:
          {{ ((1 + clickUpgrades) * clickMultiplier).toFixed(1) }} | Currency
          Per Second: {{ (idleUpgrades * idleMultiplier).toFixed(1) }}
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
      <div class="buttons-container">
        <div class="upgrade-container">
          <button v-on:click="upgradeClicks([1, clickUpgradeCost])">
            +1CP: {{ clickUpgradeCost }}
          </button>
          <button v-on:click="upgradeIdle([1, idleUpgradeCost])">
            +1 p/s: {{ idleUpgradeCost }}
          </button>
        </div>
        <div class="upgrade-multipliers-container">
          <button v-on:click="upgradeClickMultiplier(0.1)">
            Upgrade Click Multiplier
          </button>
          <button v-on:click="upgradeIdleMultiplier(0.1)">
            Upgrade Idle Multiplier
          </button>
        </div>
        <div class="reset-container">
          <button v-on:click="reset()">Reset</button>
          <button v-on:click="fullReset()">Full Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "GamePage",
  data() {
    return {
      gameTick: -1,
    };
  },
  computed: {
    ...mapGetters([
      "currency",
      "clickUpgrades",
      "idleUpgrades",
      "clickMultiplier",
      "idleMultiplier",
    ]),
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
      "perSecond",
      "upgradeClicks",
      "upgradeIdle",
      "upgradeClickMultiplier",
      "upgradeIdleMultiplier",
      "reset",
      "fullReset",
    ]),
  },
  mounted() {
    this.gameTick = setInterval(this.perSecond, 1000);
  },
  beforeDestroy() {
    clearInterval(this.gameTick);
  },
};
</script>

<style scoped lang="scss">
.game-root {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/logo.png");
  background-repeat: round;
  background-size: 1vw;
  background-color: rgb(71, 71, 71);
}

.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>