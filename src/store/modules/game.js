export default game = {
    state: {
        currency: 0,
        clickUpgrades: 0,
        idleUpgrades: 0,
        clickMultiplier: 1,
        idleMultiplier: 1
    },
    getters: {
    },
    mutations: {
        clicked(state) {
            state.currency += (1 + state.clickUpgrades) * state.clickMultiplier;
        },
        perSecond(state) {
            state.currency += state.idleUpgrades * state.idleMultiplier;
        },
        upgradeClicks(state, num) {
            state.clickUpgrades += num;
        },
        upgradeIdle(state, num) {
            state.idleUpgrades += num;
        },
        upgradeClickMultiplier(state, num) {
            state.clickMultiplier += num;
        },
        upgradeIdleMultipier(state, num) {
            state.idleMultiplier += num;
        },
        reset(state) {
            state.currency = 0;
            state.clickUpgrades = 0;
            state.idleUpgrades = 0;
        }
    },
    actions: {
    },
    modules: {
    }
}