<template>
  <div>

    <q-list>
      <q-item
        v-for="method in $store.state.ethcontract.contract.abi"
        v-if="method.constant==true && method.name != 'buyer' && method.name != 'seller'"
        :key="method.signature">

        <q-item-main>
          <q-item-tile label>{{ method.name }}</q-item-tile>
        </q-item-main>

        <q-item-side>
          <q-chip color="secondary">{{ functions[method.name] }}</q-chip>
        </q-item-side>

      </q-item>
    </q-list>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DappDrawer',
  data() {
    return {};
  },
  computed: {
    ...mapState('ethcontract', ['functions', 'contract', 'instance']),
  },
  updated() {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
