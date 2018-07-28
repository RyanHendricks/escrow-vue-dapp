
import Web3 from 'web3';
// import utils from 'web3-utils';
import mutations from './mutations';
import state from './state';
// import getters from './getters';
import { Notify } from 'quasar';

// const BN = web3.utils.BN
import ZeroClientProvider from 'web3-provider-engine/zero.js';

// rpcUrl: 'https://mainnet.infura.io',
// rpcUrl: 'https://testnet.infura.io',
// rpcUrl: 'https://rinkeby.infura.io'
// rpcUrl: 'https://ropsten.infura.io',
// rpcUrl: 'https://kovan.infura.io',

const actions = {
  initWeb3({ commit, dispatch }) {
    try {
      let web3Provider;
      if (global.web3) {
        web3Provider = global.web3.currentProvider;
        commit('IS_INJECTED', true);
        commit('SET_PROVIDER', 'injected');
      } else {
        commit('SET_HOST', state.fallbackHost);
        commit('IS_INJECTED', false);
        commit('SET_PROVIDER', 'infura');

        web3Provider = ZeroClientProvider({
          getAccounts() {},
          rpcUrl: state.rpcUrl,
        });
      }
      if (web3Provider) {
        global.web3 = new Web3(web3Provider);
        dispatch('startChecking');
      } else {
        commit('SET_CONNECTED', false);
      }
    } catch (e) {
      dispatch('createEngineNotify', e);
    }
  },
  startChecking({ dispatch }) {
    setInterval(() => {
      dispatch('check');
    }, state.updateInterval);
  },
  check({ dispatch }) {
    dispatch('checkNetwork');
    dispatch('getBlockNumber');
    dispatch('getGasPrice');
    dispatch('checkConnection');
    dispatch('checkAccount');
  },
  async checkNetwork({ commit, dispatch }) {
    try {
      const network = await global.web3.eth.net.getId();
      if (network !== state.netId) {
        commit('UPDATE_NETWORK', network);
        commit('SET_CONNECTED', true);
      }
    } catch (e) {
      dispatch('createEngineNotify', 'checknetwork error');
    }
  },
  async checkAccount({ commit, dispatch }) {
    await global.web3.eth.getAccounts((error, accounts) => {
      if (error) dispatch('createEngineNotify', error);
      if (accounts.length && state.account !== accounts[0]) {
        commit('UPDATE_UNLOCKED', true);
        commit('UPDATE_ACCOUNT', accounts[0]);
        commit('IS_INJECTED', true);
        dispatch('getBalance');
      } else if (!accounts.length && state.unlocked !== false) {
        commit('UPDATE_UNLOCKED', false);
        commit('UPDATE_ACCOUNT', 'Please Unlock Metamask');
      }
    });
  },
  async getBalance({ commit, dispatch }) {
    try {
      if (!state.account || state.unlocked === false) {
        commit('SET_BALANCE', 0);
      } else {
        await global.web3.eth.getBalance(state.account)
          .then((rawBalance) => {
            const balance = global.web3.utils.fromWei(rawBalance.toString(10), 'ether');
            commit('SET_BALANCE', balance);
          });
      }
    } catch (e) {
      dispatch('createEngineNotify', e.valueOf());
    }
  },
  async getBlockNumber({ commit, dispatch }) {
    try {
      await global.web3.eth.getBlockNumber()
        .then((block) => {
          if (block && state.blockNumber !== block) {
            commit('UPDATE_BLOCK', block);
          }
        });
    } catch (e) {
      dispatch('createEngineNotify', e);
    }
  },
  async getGasPrice({ commit, dispatch }) {
    try {
      await global.web3.eth.getGasPrice()
        .then((rawPrice) => {
          const gasPrice = global.web3.utils.fromWei(rawPrice, 'ether').toString(10) * 1000000000;
          if (gasPrice && state.gasPrice !== gasPrice) {
            commit('UPDATE_GASPRICE', gasPrice);
          }
        });
    } catch (e) {
      dispatch('createEngineNotify', e);
    }
  },
  async checkConnection({ commit, dispatch }) {
    try {
      await global.web3.eth.net.isListening()
        .then((connected) => {
          if (connected === true && state.connected !== true) {
            commit('SET_CONNECTED', true);
          }
        });
    } catch (e) {
      dispatch('createEngineNotify', e);
    }
  },

  createEngineNotify(message) {
    const msg = message.toString();
    Notify.create({
      msg,
      color: 'primary',
      textColor: 'white', // if default 'white' doesn't fits
      icon: 'memory',
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
