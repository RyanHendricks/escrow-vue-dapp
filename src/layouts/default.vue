<template>
  <q-layout view="hHh LpR fff">

    <DappHeader/>

    <q-layout-drawer
      v-model="drawerState"
      :overlay="leftOverlay"
      side="left"
    >
      <DrawerLinks />
    </q-layout-drawer>

    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>
    <q-layout-drawer
      v-model="drawerStateR"
      :overlay="rightOverlay"
      side="right"
    >
      <DappDrawer />
    </q-layout-drawer>
    <DappFooter/>

  </q-layout>
</template>

<script>
import { mapState } from 'vuex';

import { openURL } from 'quasar';

import DappDrawer from '.././components/drawer/DappDrawer';
import DrawerLinks from '.././components/drawer/DrawerLinks';
import DappFooter from '.././components/DappFooter';
import DappHeader from '.././components/DappHeader';

export default {
  name: 'LayoutDefault',
  components: {
    DrawerLinks,
    DappFooter,
    DappHeader,
    DappDrawer,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('settings', ['drawerState', 'leftOverlay', 'drawerStateR', 'rightOverlay']),
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
  created() {
    try {
      this.$store.dispatch('ethengine/initWeb3');
    } catch (e) {
      this.$store.dispatch('ethutils/createNotify', e);
    }
  },
  methods: {
    openURL,
    resetScroll(el, done) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      done();
    },
  },
};
</script>

<style>
</style>
