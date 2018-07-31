import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
// import * as actions from './actions';

const actions = {

  setPrimaryColor({ commit }, payload) {
    commit('SET_PRIMARY_COLOR', payload.toString());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
