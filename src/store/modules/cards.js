// actions
const actions = {
    addPerson({ commit }, newPerson) {
      commit('addPerson', newPerson);
    },
  };
  
  // mutations
  const mutations = {
    addPerson(state, newPerson) {
      state.people.push(newPerson)
    },
  };
  
  // initial state
  const state = {
    people: []
  };
  
  export default {
    state,
    actions,
    mutations,
  };