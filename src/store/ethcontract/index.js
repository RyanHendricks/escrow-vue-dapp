/* eslint-disable */
import { filter } from 'lodash';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './state';
import { Notify } from 'quasar';
import VeoEscrowArtifacts from './VeoEscrow.js';

const actions = {
  async deployEscrowContract({ rootState, commit, dispatch }, payload) {
    const abi = JSON.parse(VeoEscrowArtifacts.abi);
    const bin = VeoEscrowArtifacts.bin;
    commit('SET_CONTRACT_ABI', abi);
    commit('SET_CONTRACT_BIN', bin);
    const fromAddress = rootState.ethengine.account;
    const buyer = payload.veobuyer;
    const seller = payload.veoseller;
    const amount = payload.amount;
    console.log(abi);
    console.log(bin);
    console.log(fromAddress);
    console.log(buyer);
    console.log(seller);
    console.log(amount);

    const EscrowContract = new global.web3.eth.Contract(state.contract.abi);
    EscrowContract.options.data = bin;
    try {
      await EscrowContract.deploy({
        arguments: [buyer, seller, amount],
      })
        .send({ from: fromAddress })
        .on('error', error => {
          console.log(error);
        })
        .on('transactionHash', hash => {
          console.log(hash);
          dispatch('createNotify', hash);
          commit('SET_TXN_HASH', hash);
        })
        .on('receipt', receipt => {
          let ContractAddress = receipt.contractAddress;
          console.log(ContractAddress); // contains the new contract address
          dispatch('createNotify', contractAddress);
          commit('SET_CONTRACT_ADDRESS', ContractAddress);
        })
        .then(newContractInstance => {
          const contractAddress = newContractInstance.options.address;
          commit('SET_CONTRACT_INSTANCE', newContractInstance);
          commit('SET_CONTRACT_ADDRESS', contractAddress);
        });
    } catch (e) {
      console.error(e);
    }
  },

  async sendTransaction({ state, commit, dispatch }, payload) {
    try {
      const BN = global.web3.utils.BN;
      const amount = new BN(payload.amount).toString();
      const value2Send = global.web3.utils.toWei(amount, 'ether');

      console.log(value2Send);

      await global.web3.eth
        .sendTransaction({
          from: payload.fromAddress,
          to: payload.toAddress,
          value: value2Send,
        })
        .on('transactionHash', hash => {
          dispatch('createNotify', hash);
        })
        .on('receipt', receipt => {
          commit('SET_TXN_RECEIPT', receipt);
        })
        .once('confirmation', confirmationNumber => {
          let txnText = 'Confirmation: ' + confirmationNumber;
          dispatch('createNotify', txnText);
        })
        .on('error', console.error);
    } catch (e) {
      console.error(e);
    }
  },

  async createContractInstance({ dispatch, commit, state }, payload) {
    try {
      await commit('SET_CONTRACT_ADDRESS', payload.address);
      await commit('SET_CONTRACT_NETWORK', payload.network);
      await commit('SET_CONTRACT_ABI', payload.abi);
      let MyContract = await new global.web3.eth.Contract(
        state.contract.abi,
        state.contract.address,
      );
      await commit('SET_CONTRACT_INSTANCE', MyContract);
      let address = payload.address;
      dispatch('createNotify', 'Contract Loaded');
      // dispatch('readContract');
      dispatch('createNotify', address);
    } catch (e) {
      console.log(e);
    }
  },

  async setMethodValues({ commit, state }, payload) {
    try {
      commit('SET_CONTRACT_METHOD_VALUE', payload);
    } catch (e) {
      console.log(e);
    }
  },

  async callContract({ dispatch, state, commit }, methodName) {
    try {
      // const abi = state.contract.abi;
      // const address = state.contract.address;
      // let MyContract = await new global.web3.eth.Contract(state.contract.abi, state.contract.address);
      let MyContract = state.instance;
      let call = MyContract.methods[name].apply(MyContract.methods);
      let result = await call.call().then(result => {
        console.log(result);
        console.log('vuex callContract');
        commit('SET_CONTRACT_CONSTANT', result);
        return result;
      });
      // dispatch('createNotify', result);
      // dispatch('readContract')
    } catch (e) {
      // dispatch('createNotify', e);
    }
  },

  async makeCall({ state, dispatch, commit }, name) {
    let constFunctions = getters.constantFunctions;
    console.log(constFunctions);
    const call = constFunctions.methods[name].apply(constFunctions.methods);
    const value = await call.call().then(result => {
      dispatch('createNotify', value);
    });
  },
  /**
   *   async function makeCall({ state, dispatch, commit }, name) {
    let call = contract.methods[method].apply(contract.methods, args)
    let value = await call.call()
    res[key] = value
    vm.$emit('CALL_SYNCED', { key, method, args, value })
  },
  */

  async readContracts() {
    /**  
    const buyer = await dispatch('readContract', methodName);
      const buyerEscrowedFunds = await dispatch('readContract', methodName);
      const buyerFinalize= await dispatch('readContract', methodName);
      const buyerHasFunded = await dispatch('readContract', methodName);
      const buyerRequiredEscrow = await dispatch('readContract', methodName);
      const buyerfinalized = await dispatch('readContract', methodName);
      const escrowFullyFunded = await dispatch('readContract', methodName);
      const finalized = await dispatch('readContract', methodName);
      // const fundContract(address,uint256);
      const initiated = await dispatch('readContract', methodName);
      const purchaseAmount = await dispatch('readContract', methodName);
      const seller = await dispatch('readContract', methodName);
      const sellerEscrowedFunds = await dispatch('readContract', methodName);
      const sellerFinalize = await dispatch('readContract', methodName);
      const sellerHasFunded = await dispatch('readContract', methodName);
      const sellerRequiredEscrow = await dispatch('readContract', methodName);
      const sellerfinalized = await dispatch('readContract', methodName);
      const totalEscrowAmount = await dispatch('readContract', methodName);
  */
    const methodsCalled = [];
    state.contract.abi.forEach(method => {
      let name = method.name;
      console.log(name);
      const response = dispatch('callContract', name);
      methodsCalled.push(response);
      console.log(response);
      dispatch('createNotify', name);
      return response;
    });
  },

  async readContractConstants({ state, commit, dispatch }, methodName) {
    try {
      let MyContract = await new global.web3.eth.Contract(
        state.contract.abi,
        state.contract.address,
      );
      const call = contractInstance.methods[methodName]
        .apply(contractInstance.methods[methodName])
        .call()
        .then(res => {
          console.log(res.toString());
          // console.log('dapp drawer');
          functions[method.name] = res;
        });

      //this.functions[methodName] = res;
      console.log(res);
      console.log('vuex readContractConstants');

      // this.functions[methodName] = res;
    } catch (e) {
      dispatch('createNotify', e);
    }

    // return Promise.resolve(res);
  },

  async readContract({ dispatch, commit, state }) {
    const contractInstance = new global.web3.eth.Contract(
      state.contract.abi,
      state.contract.address,
    );
    let functions = {};

    try {
      state.contract.abi.forEach(method => {
        if (method.constant == true) {
          const call = contractInstance.methods[methodName]
            .apply(contractInstance.methods[methodName])
            .call();
          console.log(call);
          functions[method.name] = call;
        }
      });
      let payload = functions;
      commit('SET_CONTRACT_METHOD_VALUE', payload);
    } catch (e) {
      console.log(e);
    }
  },

  createNotify({ dispatch }, message) {
    Notify.create({
      message: message,
      color: 'primary',
      textColor: 'white', // if default 'white' doesn't fits
      icon: 'memory',
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

/* eslint-enable */
