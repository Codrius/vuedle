import axios from "@/utils/axios"

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
    perTenthSecond(state) {
        state.currency += (state.idleUpgrades * state.idleMultiplier) / 10;
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
    reset(state) { // Soft reset to gain multipliers
        if (confirm(`Are you sure you want to prestige? You will lose all currency and upgrades, and gain:\n+${(state.clickUpgrades / 10).toFixed(1)} bonus to click multiplier\n+${(state.idleUpgrades / 10).toFixed(1)} bonus to idle multiplier`)) {
            state.currency = 0;
            state.clickMultiplier += Number((state.clickUpgrades / 10).toFixed(1));
            state.idleMultiplier += Number((state.idleUpgrades / 10).toFixed(1));
            state.clickUpgrades = 0;
            state.idleUpgrades = 0;
        }
    },
    fullReset(state) { // Hard reset everything back to scratch
        if (confirm("Are you sure you want to fully reset the game?")) {
            state.currency = 0;
            state.clickUpgrades = 0;
            state.idleUpgrades = 0;
            state.clickMultiplier = 1;
            state.idleMultiplier = 1;
        }
    },
    fullResetPromptless(state) { // Used for logouts
        state.currency = 0;
        state.clickUpgrades = 0;
        state.idleUpgrades = 0;
        state.clickMultiplier = 1;
        state.idleMultiplier = 1;
    },
    setState(state, newstate) { // Used for loading
        Object.assign(state, newstate);
    }
}
const actions = {
    async autoSave(context) { // Promptless saving for autosave
        try {
            const res = await axios.post("save", {
                state: { ...context.state },
                jwt: context.getters.jwt,
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    },
    async attemptSave(context) { // Prompted saving for save button
        try {
            const res = await axios.post("save", {
                state: { ...context.state },
                jwt: context.getters.jwt,
            })
            alert("Saved Successfully!")
            console.log(res);
        } catch (error) { // If error, inform the user
            alert(error);
        }
    },
    async attemptLoad(context) {
        try {
            const res = await axios.post("load")
            context.commit("setState", res.data)
            console.log(res);
        } catch (error) { // If error, inform the user
            alert(error);
        }
    }
}
const modules = {}

export default {
    state,
    getters,
    mutations,
    actions,
    modules
}