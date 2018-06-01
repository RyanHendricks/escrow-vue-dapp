<template>
  <q-layout-header class="shadow-1">
    <q-toolbar
      class="no-shadow"
      color="primary"
      inverted
      flat
    >
      <q-tabs
        align="justify"
        inverted
      >
        <q-route-tab
          slot="title"
          icon="all inclusive"
          to="/"
          replace
          default
          exact
          label="Escrow"
        />
        <q-route-tab
          slot="title"
          icon="send"
          to="/SendETH"
          replace
          label="Send ETH"
        />
        <q-route-tab
          slot="title"
          icon="spa"
          to="/Status"
          replace
          label="Status"
        />
        <q-route-tab
          slot="title"
          icon="toys"
          to="/Info"
          replace
          label="Info/About"
        />

      </q-tabs>
      <q-toolbar-title />
      <UserDropdown />
    </q-toolbar>
  </q-layout-header>
</template>

<script>
import UserDropdown from './UserDropdown';
import { mapState } from 'vuex';

export default {
  name: 'Header',
  components: {
    UserDropdown,
  },
  data() {
    return {
      dropdown: false,
      title: 'Veo Escrow',
    };
  },
  computed: {
    ...mapState('settings', ['headerReveal', 'header']),
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
  },
  methods: {},
};
</script>

<style>
</style>
