// actions
const actions = {
  globalSetNotifySnackBar({ commit }, snackBar) {
    commit('globalSetNotifySnackBar', snackBar);
  },
};

// mutations
const mutations = {
  globalSetNotifySnackBar(state, snackBar) {
    state.snackBar = snackBar;
  },
};

// initial state
const state = {
  snackBar: {
    color: 'info',
    duration: 4000,
    active: false,
    message: '',
  },
};

export default {
  state,
  actions,
  mutations,
};
