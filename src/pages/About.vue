<template>
  <q-page
    padding
    class="row justify-center">
    <caption>
      You can create a new escrow contract or if you can load an existing contract if
      you are are the counterparty to an already-deployed escrow contract
    </caption>

    <div
      v-if="this.$store.state.ethcontract.deployerVisible == true"
      class="col; q-ma-md"
      style="width: 500px; max-width: 90vw;">
      <ContractDeployer />
    </div>

    <div
      v-if="this.$store.state.ethcontract.loaderVisible == true"
      class="col; q-ma-md"
      style="width: 500px; max-width: 90vw;">
      <ContractLoader />
    </div>

    <div
      :v-if="this.$store.state.ethcontract.interfaceVisible == true"
      class="col; q-ma-md"
      style="width: 500px; max-width: 90vw;">
      <ContractInterface />
    </div>

  </q-page>
</template>

<script>
import ContractLoader from '.././components/ContractLoader.vue';
import ContractDeployer from '.././components/ContractDeployer.vue';
import ContractInterface from '.././components/ContractInterface.vue';

export default {
  name: 'Contract',
  components: {
    ContractLoader,
    ContractInterface,
    ContractDeployer,
  },
  data() {
    return {
      deployerVisible: this.$store.state.ethcontract.deployerVisible,
      loaderVisible: this.$store.state.ethcontract.loaderVisible,
      interfaceVisible: this.$store.state.ethcontract.interfaceVisible,
    };
  },
};
</script>


<style>


</style>
