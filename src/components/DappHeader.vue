<template>
  <q-layout-header
    v-model="header"
    :reveal="headerReveal"
    class="shadow-1">
    <q-toolbar
      :style="{ color: primaryColor }"
      :inverted="invertColors"
      :color="primaryColor"
      class="no-shadow"
      flat>

      <q-tabs
        v-if="headerIcons === true"
        :inverted="invertColors"
        :color="primaryColor"
        align="justify"


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
          to="/Send"
          replace
          exact
          label="Send ETH"
        />
        <q-route-tab
          slot="title"
          icon="spa"
          to="/About"
          replace
          exact
          label="About"
        />
      </q-tabs>

      <q-tabs
        v-if="headerIcons === false"
        align="justify"
        inverted>
        <q-route-tab
          slot="title"
          to="/"
          replace
          default
          exact
          label="Escrow"
        />
        <q-route-tab
          slot="title"
          to="/Send"
          replace
          exact
          label="Send ETH"
        />
        <q-route-tab
          slot="title"
          to="/About"
          replace
          exact
          label="About"
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
    };
  },
  computed: {
    ...mapState('settings', ['headerReveal', 'header', 'headerIcons', 'invertColors', 'primaryColor']),
    primaryColor: {
      get() {
        return this.$store.state.settings.primaryColor;
      },
      set(val) {
        this.$store.dispatch('settings/setPrimaryColor', val);
      },
    },
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
