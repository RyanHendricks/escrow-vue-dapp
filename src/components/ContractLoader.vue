<template>
  <div>
    <h6>Load contract instance from address</h6>
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

      <!-- Input for Buyer Address -->
      <q-btn
        label="Load Contract"
        color="secondary"
        inverted
        @click="loadContract()" />
    </div>
  </div>
</template>

<script>
import VeoEscrowArtifacts from '.././store/ethcontract/VeoEscrow.js';

export default {
  name: 'ContractLoader',
  data() {
    return {
      // default address, abi, network, are for sample contract
      address: '0xa88e14C695C116e3D37c55E6c434420e1200412F',
      network: 3,
      error: '',
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
          network: this.network * 1,
          abi: JSON.parse(VeoEscrowArtifacts.abi),
        };
        // dispatch contract object to vuex
        const instance = await this.$store.dispatch('ethcontract/createContractInstance', contract);
        this.readContractConstants();
        return instance;
      } catch (e) {
        // catch errors from object creation and dispatch
        // this will not catch errors from contract instance creation
        // eslint-disable-next-line
        console.error(e);
        this.error = e.toString();
      }
      return true;
    },
    async readContractConstants() {
      const contractInstance = await new global.web3.eth.Contract(
        this.$store.state.ethcontract.contract.abi,
        this.$store.state.ethcontract.contract.address,
      );
      await this.$store.state.ethcontract.contract.abi.forEach((method) => {
        try {
          // console.log(this.$store.state.ethcontract.contract.abi);
          // console.log(this.$store.state.ethcontract.contract.address);
          if (method.constant === true) {
            contractInstance.methods[method.name]
              .apply(contractInstance.methods[method.name])
              .call()
              .then((res) => {
                // console.log(res.toString());
                this.functions[method.name] = res;
                return this.functions[method.name];
              });
          }
        } catch (e) {
          // return e;
          // console.error(e);
        }
      });
      this.$store.dispatch('ethcontract/setMethodValues', this.functions);

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
