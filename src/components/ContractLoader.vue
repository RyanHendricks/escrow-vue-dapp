<template>
  <div>
    <h6>Load a deployed contract</h6>
    <div>
      <!-- Input for Deployed Contract Address -->
      <q-field
        class="q-pa-md"
        icon="all inclusive"
        helper="Enter the address of the deployed contract">
        <q-input
          v-model="address"
          float-label="Contract Address" />
      </q-field>
      <q-field
        class="q-pa-md"
        icon="dashboard"
        helper="Enter (paste) the contract ABI">
        <q-input
          v-model="abi"
          float-label="Contract Address" />
      </q-field>
      <q-btn
        label="Load Contract"
        color="secondary"
        inverted
        @click="loadContract()" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const TUabi =
      '[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"}],"name":"getUserAccountInfo","outputs":[{"name":"_startingBalance","type":"uint256"},{"name":"_reward","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_tokenBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"},{"name":"_user","type":"address"}],"name":"getUserAccountTokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"userAccountTokenBalances","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"depositToken","outputs":[{"name":"userReward","type":"uint256"},{"name":"depositAmount","type":"uint256"},{"name":"oldBalanceUser","type":"uint256"},{"name":"newBalanceUser","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"rewardInitialPerUserPerToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_DECIMALS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"userWalletTokenBalances","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"nonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"rewardRemainingPerToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMyTokenBalances","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"},{"name":"_user","type":"address"}],"name":"userTokenStats","outputs":[{"name":"accountBalance","type":"uint256"},{"name":"walletBalance","type":"uint256"},{"name":"accruedRewards","type":"uint256"},{"name":"feesOwed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reward_ppb_total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"},{"name":"_user","type":"address"}],"name":"getUserWalletTokenBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FEE_RATIO","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_DECIMALS_UINT8","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"}],"name":"getUserTokenInfo","outputs":[{"name":"accountBalance","type":"uint256"},{"name":"walletBalance","type":"uint256"},{"name":"accruedRewards","type":"uint256"},{"name":"feesOwed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_token","type":"address"},{"name":"_user","type":"address"}],"name":"simulatedWithdrawal","outputs":[{"name":"_startingBalance","type":"uint256"},{"name":"_reward","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_tokenBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PPB","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"token","type":"address"}],"name":"DepositMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"fee","type":"uint256"},{"indexed":false,"name":"reward","type":"uint256"}],"name":"WithdrawalMade","type":"event"}]';
/* eslint-enable */

export default {
  name: 'ContractLoader',
  data() {
    return {
      address: '0x0183aa95C7F485627a430335E66aB9659D98a161',
      error: '',
      abi: TUabi,
      functions: {},
    };
  },
  computed: {},
  methods: {
    async loadContract() {
      try {
        // Validate the input -- this could be improved but works for basic validation
        if (this.address.length !== 42 && this.address.substr(0, 2) !== '0x') {
          return null;
        }
        // Add necessary elements to the contract object
        const contract = {
          address: this.address,
          abi: this.abi,
        };
        // dispatch contract object to vuex
        await this.$store.dispatch('ethcontract/createContractInstance', contract);
      } catch (e) {
        // catch errors from object creation and dispatch
        // this will not catch errors from contract instance creation
        // eslint-disable-next-line
          throw new Error(e);
      }
      return this.readContractConstants();
    },
    async readContractConstants() {
      try {
        this.$store.dispatch('ethcontract/readContractConstants');
      //   const contractInstance = new global.web3.eth.Contract(
      //     this.$store.state.ethcontract.contract.abi,
      //     this.$store.state.ethcontract.contract.address,
      //   );
      //   console.log(contractInstance.toString());
      //   await this.$store.state.ethcontract.contract.abi.forEach((method) => {
      //     console.log(this.$store.state.ethcontract.contract.abi);
      //     // console.log(this.$store.state.ethcontract.contract.address);
      //     if (method.constant === true) {
      //       contractInstance.methods[method.name]
      //         .apply(contractInstance.methods[method.name])
      //         .call()
      //         .then((res) => {
      //         // console.log(res.toString());
      //           this.functions[method.name] = res;
      //           return this.functions[method.name];
      //         });
      //     }
      //   });
      //   this.$store.dispatch('ethcontract/setMethodValues', this.functions);
      } catch (e) {
        throw new Error(e);
      }
      // let data = await this.$store.dispatch('ethcontract/callContract', methodName);
      // this.functions[methodName] = data;
      // this.$store.dispatch('ethcontract/readContract');
      // dispatch()
      // });
    },
  },
};
</script>

<style>
</style>
