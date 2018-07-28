export default {
  UPDATE_NETWORK(state, network) {
    state.netId = network;
    switch (network) {
      case 1:
        state.network = ' Main Net';
        state.rpcURL = 'https://mainnet.infura.io';
        break;
      case 2:
        state.network = ' Morden Testnet (deprecated)';
        state.rpcURL = 'https://mainnet.infura.io';
        break;
      case 3:
        state.network = ' Ropsten Testnet';
        state.rpcURL = 'https://ropsten.infura.io';
        break;
      case 4:
        state.network = ' Rinkeby Testnet';
        state.rpcURL = 'https://rinkeby.infura.io';
        break;
      default:
        state.network = 'local';
        state.rpcURL = 'https://127.0.0.1:8545';
        break;
    }
  },
  UPDATE_UNLOCKED(state, unlocked) {
    state.unlocked = unlocked;
  },
  UPDATE_ACCOUNT(state, account) {
    state.account = account;
  },
  UPDATE_BLOCK(state, block) {
    state.blockNumber = block;
  },
  SET_HOST(state, host) {
    state.rpcURL = host;
  },
  UPDATE_GASPRICE(state, gasPrice) {
    state.gasPrice = gasPrice;
  },
  SET_BALANCE(state, balance) {
    state.balance = balance;
  },
  SET_CONNECTED(state, val) {
    state.connected = val;
  },
  IS_INJECTED(state, injected) {
    state.isInjected = injected;
  },
  SET_PROVIDER(state, provider) {
    state.provider = provider;
  },
};
