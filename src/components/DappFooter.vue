<template>
  <q-layout-footer
    v-model="footer"
    :reveal="footerReveal">

    <q-toolbar
      color="primary"
      inverted
      flat>
      <q-btn
        flat
        @click="drawerStateR = !drawerStateR"
      >
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        <div slot="subtitle">
          <b>
            Contract Address: {{ contract.address }}
          </b>
        </div>
        <div slot="subtitle">Buyer: {{ functions.buyer }} </div>
        <div slot="subtitle">Seller: {{ functions.seller }} </div>
      </q-toolbar-title>

      <q-btn
        flat
        round
        @click="drawerState = !drawerState"
      >
        <q-icon name="network_check" />
      </q-btn>

      <q-btn
        flat
        round
        @click="$router.push('/Help')"
      >
        <q-icon name="help" />
      </q-btn>

    </q-toolbar>

  </q-layout-footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DappFooter',
  computed: {
    drawerState: {
      get() {
        return this.$store.state.settings.drawerState;
      },
      set(val) {
        this.$store.commit('settings/updateDrawerState', val);
      },
    },
    drawerStateR: {
      get() {
        return this.$store.state.settings.drawerStateR;
      },
      set(val) {
        this.$store.commit('settings/updateDrawerStateR', val);
      },
    },
    ...mapState('settings', ['footerReveal', 'footer']),
    ...mapState('ethcontract', ['functions', 'contract']),
  },
};
</script>

<style>
</style>
