<template>
  <div>
    <div v-if="isInjected === true && unlocked === true">
      <q-btn-dropdown
        flat
        icon="account balance wallet"

      >
        <!-- dropdown content -->
        <q-list
          dense
          inset-delimiter
        >
          <q-item>
            <q-item-side icon="account circle" />
            <q-item-main>
              <q-item-tile sublabel>{{ account }}</q-item-tile>
              <q-item-tile sublabel>Balance: {{ balance }} ETH</q-item-tile>
              <q-item-tile sublabel>Network: {{ network }}</q-item-tile>
            </q-item-main>
            <q-item-side />
          </q-item>
        </q-list>
      </q-btn-dropdown>

    </div>
    <div v-if="unlocked === false && isInjected === false">
      <q-btn
        flat
        color="primary"
        text-color="neutral"
        label="Please Install Metamask" />
    </div>
    <div v-if="unlocked === false && isInjected === true">
      <q-btn
        flat
        color="primary"
        text-color="neutral"
        label="Please Unlock Metamask"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserDropdown',
  data() {
    return {};
  },
  computed: {
    ...mapState('ethengine', [
      'account',
      'balance',
      'network',
      'provider',
      'isInjected',
      'unlocked',
    ]),
  },
};
</script>

<style>
</style>
