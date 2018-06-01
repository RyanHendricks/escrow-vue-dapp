export default {
  UPDATE_NETWORK(state, network) {
    if (state.network === network) {
      return;
    }
    switch (network) {
      case 1:
        state.network = ' Main Net';
        state.provider = 'Infura';
        state.rpcURL = 'https://mainnet.infura.io';
        break;
      case 2:
        state.network = ' Morden Testnet (deprecated)';
        state.provider = 'Infura';
        state.rpcURL = 'https://mainnet.infura.io';
        break;
      case 3:
        state.network = ' Ropsten Testnet';
        state.provider = 'Infura';
        state.rpcURL = 'https://ropsten.infura.io';
        break;
      case 4:
        state.network = ' Rinkeby Testnet';
        state.provider = 'Infura';
        state.rpcURL = 'https://rinkeby.infura.io';
        break;
      default:
        state.network = 'local';
        state.provider = 'local';
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
  IS_CONNECTED(state, val) {
    state.connected = val;
  },
  IS_INJECTED(state, injected) {
    state.isInjected = injected;
  },
};
