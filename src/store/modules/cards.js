// actions
const actions = {
    addPerson({ commit }, newPerson) {
      commit('addPerson', newPerson);
    },
    setPeople({ commit }, peopleData) {
      commit('setPeople', peopleData);
    },
    setPerson({ commit }, personData) {
      commit('setPerson', personData);
    },
  };
  
  // mutations
  const mutations = {
    addPerson(state, newPerson) {
      state.people.push(newPerson);
    },
    setPeople(state, peopleData) {
      state.people = peopleData;
    },
    setPerson(state, personData) {
      state.people[personData.id] = personData;
      localStorage.setItem('people', JSON.stringify(state.people));
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