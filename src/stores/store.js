// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groupID: ''
  },
  mutations: {
    setGroupID(state, groupID) {
      state.groupID = groupID;
    }
  },
  actions: {
    updateGroupID({ commit }, groupID) {
      commit('setGroupID', groupID);
    }
  },
  getters: {
    groupID: state => state.groupID
  }
});
