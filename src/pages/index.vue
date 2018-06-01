<template>
  <q-page
    padding
    class="row justify-center">

    <div
      class="col; q-ma-md"
      style="width: 500px; max-width: 90vw;">
      <ContractDeployer />
    </div>

    <div
      class="col; q-ma-md"
      style="width: 500px; max-width: 90vw;">
      <ContractLoader />
    </div>

  </q-page>
</template>

<script>
import ContractLoader from '.././components/ContractLoader.vue';
import ContractDeployer from '.././components/ContractDeployer.vue';

export default {
  name: 'Contract',
  components: {
    ContractLoader,
    ContractDeployer,
  },
  data() {
    return {
    };
  },
};
</script>


<style>


</style>
