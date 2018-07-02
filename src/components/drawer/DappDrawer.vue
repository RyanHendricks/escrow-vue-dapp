<template>
  <div>

    <q-list>
      <q-item
        v-for="method in contract.abi"
        v-if="method.constant==true && method.name != 'buyer' && method.name != 'seller'"
        :key="method.signature">

        <q-item-main>
          <q-item-tile label>{{ method.name }}</q-item-tile>
        </q-item-main>

        <q-item-side>
          <q-chip
            v-if="functions[method.name] === false"
            color="warning">{{ functions[method.name].toString() }}
          </q-chip>
          <q-chip
            v-if="functions[method.name] === true"
            color="green">{{ functions[method.name].toString() }}
          </q-chip>
          <q-chip
            v-else-if="functions[method.name]"
            color="blue">{{ functions[method.name].toString() }}
          </q-chip>
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
