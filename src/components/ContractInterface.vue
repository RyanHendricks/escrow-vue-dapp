<template>
  <div>
    <h4>Veo Escrow</h4>
    <q-card
      v-for="method in abi"
      v-if="method.constant === true"
      :key="method.signature"
      title="test"
      class="q-pa-md; q-ma-md">
      <q-card-title>
        {{ method.name }}
      </q-card-title>
      <!-- <q-card-title class="q-pa-lg">{{ method.name }}</q-card-title>
        <q-card-subtitle>{{ method.type }}</q-card-subtitle> -->
      <q-field
        v-if="functions[method.name]"
        :label="functions[method.name].toString()"
        class="q-pa-md"
        icon="wifi">
        <q-input
          v-for="(input, index) in method.inputs"
          v-if="input"
          :key="input.name"
          v-model="input[index]"
          :float-label="input.type + ' ' + input.name"
          class="q-ma-md"/>
      </q-field>
      <q-field
        v-if="method.constant === false"
        :label="method.name"
        class="q-pa-md"
        icon="wifi">
        <!-- :helper="'Constant: ' + method.constant
          + ' Payable: ' + method.payable + ' State Mutability: ' + method.stateMutability"
-->
        <q-input
          v-for="(input, index) in method.inputs"
          v-if="input"
          :key="input.name"
          v-model="input[index]"
          :float-label="input.type + ' ' + input.name"
          class="q-ma-md"/>
        <q-btn
          :v-model="method.name"
          color="primary"
          @click="callContractArgs(method.name)"
        >Call</q-btn>
      </q-field>
    </q-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ContractInterface',
  components: {
  },
  data() {
    return {
      data: [],
      error: '',
      contractFunctions: this.$store.state.ethcontract.contract.abi,
      input: [],
      call: '',
      response: '',
    };
  },
  computed: {
    abi: {
      get() {
        return this.$store.state.ethcontract.contract.abi;
      },
    },
    ...mapState('ethcontract', ['functions', 'contract', 'instance']),
  },
  methods: {
    mounted() {
      this.readContract();
    },

    readContract() {
      // this.$store.state.ethcontract.contract.abi.forEach(method => {
      this.$store.dispatch('ethcontract/readContract');

      // const res = this.callContract(method.name);
      // this.functions[method.name] = this.callContract(method.name);
    },
  },
};
</script>

<style>
</style>
