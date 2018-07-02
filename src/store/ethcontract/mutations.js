export const SET_CONTRACT_INSTANCE = (state, val) => {
  state.instance = val;
};
export const SET_CONTRACT_CONSTANT = (state, val) => {
  state.value = val;
};
export const SET_CONTRACT_ADDRESS = (state, val) => {
  state.contract.address = val;
};

export const SET_CONTRACT_NETWORK = (state, val) => {
  state.contract.network = val;
};

export const SET_CONTRACT_ABI = (state, val) => {
  state.contract.abi = val;
  state.deployerVisible = false;
  state.loaderVisible = false;
  state.interfaceVisible = true;
};
export const SET_CONTRACT_BIN = (state, val) => {
  state.contract.bin = val;
};

export const SET_TXN_HASH = (state, val) => {
  state.contract.hash = val;
};

export const SET_CONTRACT_METHOD_VALUE = (state, val) => {
  state.functions = val;
};

export const SET_BUYER = (state, val) => {
  state.buyer = val;
};
