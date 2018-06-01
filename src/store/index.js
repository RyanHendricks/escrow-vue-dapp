import Vue from 'vue';
import Vuex from 'vuex';

import settings from './settings';
import ethengine from './ethengine';
import ethcontract from './ethcontract';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ethengine,
    settings,
    ethcontract,
  },
});

export default store;
