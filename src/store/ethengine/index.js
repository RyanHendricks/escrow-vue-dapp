/* eslint-disable */

import Web3 from 'web3';
// import utils from 'web3-utils';
import mutations from './mutations';
import state from './state';
// import getters from './getters';

// const BN = web3.utils.BN
import ZeroClientProvider from 'web3-provider-engine/zero.js';

// rpcUrl: 'https://mainnet.infura.io',
// rpcUrl: 'https://testnet.infura.io',
// rpcUrl: 'https://rinkeby.infura.io'
// rpcUrl: 'https://ropsten.infura.io',
// rpcUrl: 'https://kovan.infura.io',

const actions = {
  async initWeb3({ state, commit, dispatch }) {
    await new Promise((resolve, reject) => {
      if (global.web3) {
        var web3Provider = global.web3.currentProvider;
      } else {
        commit('SET_HOST', state.fallbackHost);
        web3Provider = ZeroClientProvider({
          getAccounts: function() {},
          rpcUrl: state.rpcUrl,
        });
      }
      if (web3Provider) {
        global.web3 = new Web3(web3Provider);
        dispatch('startChecking');
      } else {
        reject('error');
      }
    });
  },
  startChecking({ dispatch }) {
    setInterval(() => {
      dispatch('check');
    }, state.updateInterval);
  },
  async check({ dispatch }) {
    await dispatch('checkNetwork');
    await dispatch('getBlockNumber');
    await dispatch('getGasPrice');
    await dispatch('checkConnection');
    await dispatch('checkAccount');

  },
  async checkNetwork({ state, commit, dispatch }) {
    try {
      const network = await global.web3.eth.net.getId();
      commit('UPDATE_NETWORK', network);
    } catch(e) {
      dispatch('settings/createNotify', e);
    }
  },
  async checkAccount({ state, commit, dispatch }) {
    await global.web3.eth.getAccounts((error, accounts) => {
      if (error) throw new Error(error);
      if (accounts.length && state.account !== accounts[0]) {
        commit('UPDATE_UNLOCKED', true);
        commit('UPDATE_ACCOUNT', accounts[0]);
        commit('IS_INJECTED', true);
        dispatch('getBalance', accounts[0]);
      } else if (!accounts.length) {
        commit('UPDATE_UNLOCKED', false);
        commit('UPDATE_ACCOUNT', "Please Unlock Metamask");
      }
    });
  },
  async getBalance({ commit, state }) {
    await new Promise((resolve, reject) => {
      const coinbase = state.account;
      if (!coinbase) {
        return resolve('0');
      }
      global.web3.eth.getBalance(state.account, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const balance = global.web3.utils.fromWei(result.toString(10), 'ether');
          if (state.balance !== balance) commit('SET_BALANCE', balance);
          resolve(balance);
        }
      });
    });
  },
  async getBlockNumber({ state, commit, dispatch }) {
    await global.web3.eth.getBlockNumber((err, block) => {
      if (err) throw new Error(err);
      if (block) {
        commit('UPDATE_BLOCK', block);
      }
    });
  },
  async getGasPrice({ state, commit, dispatch }) {
    await global.web3.eth.getGasPrice((err, rawprice) => {
      if (err) throw new Error(err);
      if (rawprice) {
        let gasPrice = global.web3.utils.fromWei(rawprice, 'ether').toString(10) * 1000000000;
        commit('UPDATE_GASPRICE', gasPrice);
      }
    });
  },
  async checkConnection({ state, commit, dispatch }) {
    await global.web3.currentProvider.isConnected((err, connected) => {
      if (err) throw new Error(err);
      if (connected === true) {
        commit('IS_CONNECTED', true);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
