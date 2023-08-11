const state = {
    currency: 0,
    clickUpgrades: 0,
    idleUpgrades: 0,
    clickMultiplier: 1,
    idleMultiplier: 1
}

const getters = {
    currency({ currency }) {
        return currency.toFixed(1);
    },
    clickUpgrades({ clickUpgrades }) {
        return clickUpgrades;
    },
    idleUpgrades({ idleUpgrades }) {
        return idleUpgrades;
    },
    clickMultiplier({ clickMultiplier }) {
        return clickMultiplier.toFixed(1);
    },
    idleMultiplier({ idleMultiplier }) {
        return idleMultiplier.toFixed(1);
    }
}
const mutations = {
    clicked(state) {
        state.currency += (1 + state.clickUpgrades) * state.clickMultiplier;
    },
    perSecond(state) {
        state.currency += state.idleUpgrades * state.idleMultiplier;
    },
    upgradeClicks(state, [num, cost]) {
        if (state.currency >= cost) {
            state.currency -= cost;
            state.clickUpgrades += num;
        }
    },
    upgradeIdle(state, [num, cost]) {
        if (state.currency >= cost) {
            state.currency -= cost;
            state.idleUpgrades += num;
        }
    },
    upgradeClickMultiplier(state, num) {
        state.clickMultiplier += num;
    },
    upgradeIdleMultiplier(state, num) {
        state.idleMultiplier += num;
    },
    reset(state) {
        state.currency = 0;
        state.clickMultiplier += Number((state.clickUpgrades / 10).toFixed(1));
        state.idleMultiplier += Number((state.idleUpgrades / 10).toFixed(1));
        state.clickUpgrades = 0;
        state.idleUpgrades = 0;
    },
    fullReset(state) {
        state.currency = 0;
        state.clickUpgrades = 0;
        state.idleUpgrades = 0;
        state.clickMultiplier = 1;
        state.idleMultiplier = 1;
    }
}
const actions = {}
const modules = {}

export default {
    state,
    getters,
    mutations,
    actions,
    modules
}