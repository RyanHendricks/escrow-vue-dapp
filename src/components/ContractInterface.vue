<template>
  <div>
    <h4>Contract Interface</h4>
    <q-card
      v-for="method in functions"
      v-if="method.stateMutability === 'view'"
      :key="method.name"
      title="test"
      class="q-pa-md; q-ma-md">

      <q-card-title>
        {{ method.name }}
      </q-card-title>

      <q-card-main>

        <q-field
          v-if="method.inputs.length === 0"
          :label="functions[method.name].value.toString()"
          class="q-pa-md"
          icon="wifi" />


        <q-field
          v-if="method.inputs.length > 0"
          :label="functions[method.name].value.toString()"
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
      </q-card-main>

      <!-- <q-btn
        :v-model="method.name"
        color="primary"
        @click="callContractArgs(method.name)"
      >Call</q-btn> -->
    </q-card>
    <q-card
      v-for="method in abi"
      v-if="method.stateMutability === 'view' && method.inputs.length > 0"
      :key="method.signature"
      class="q-pa-md; q-ma-md">
      <q-card-title>
        {{ method.name }}
      </q-card-title>
      <q-card-main>
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
          v-if="method.constant === true && method.inputs"
          :label="method.name"
          class="q-pa-md"
          icon="wifi">
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
            @click="callContract(method.name)"
          >Call</q-btn>
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
      </q-card-main>
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
      contractFunctions: JSON.parse(this.$store.state.ethcontract.contract.abi),
      input: [],
      call: '',
      response: '',
    };
  },
  computed: {
    functions: {
      get() {
        return JSON.parse(this.$store.state.ethcontract.contract.abi);
      },
    },
    abi: {
      get() {
        return JSON.parse(this.$store.state.ethcontract.contract.abi);
      },
    },
    ...mapState('ethcontract', ['functions', 'contract']),
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
