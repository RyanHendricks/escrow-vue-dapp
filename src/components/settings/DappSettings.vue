<template>
  <q-list
    no-border
    link
    inset-delimiter>

    <p class="caption">Layout Settings</p>
    <q-field
      color="primary"
      icon="dashboard"
      icon-color="secondary"
      label="Layout">

      <div>
        <q-toggle
          v-model="header"
          class="q-pa-sm"
          label="Header" />
      </div>

      <div>
        <q-toggle
          v-model="headerReveal"
          class="q-pa-sm"
          label="Header Reveal" />
      </div>

      <div>
        <q-toggle
          v-model="footer"
          class="q-pa-sm"
          label="Footer" />
      </div>

      <div>
        <q-toggle
          v-model="footerReveal"
          class="q-pa-sm"
          label="Footer Reveal" />
      </div>

      <div>
        <q-toggle
          v-model="leftOverlay"
          class="q-pa-sm"
          label="Left Overlay" />
      </div>

      <!-- <div>
        <q-toggle
          v-model="rightOverlay"
          class="q-pa-sm"
          label="Right Overlay" />
      </div> -->

    </q-field>

    <p class="caption">Theme Settings</p>
    <q-field
      color="primary"
      icon="brush"
      icon-color="secondary"
      label="Theme">

      <div>
        <q-toggle
          v-model="headerIcons"
          class="q-pa-sm"
          label="Header Icons" />
      </div>

      <div>
        <q-toggle
          v-model="invertColors"
          class="q-pa-sm"
          label="Invert Colors" />
      </div>

      <div>
        <template>
          <q-color-picker v-model="modelHex" />
        </template>

      </div>

      <q-item-separator />
  </q-field></q-list>
</template>

<script>
export default {
  name: 'DappSettings',
  data() {
    return {};
  },
  computed: {
    header: {
      get() {
        return this.$store.state.settings.header;
      },
      set(val) {
        this.$store.commit('settings/setHeader', val);
      },
    },
    headerReveal: {
      get() {
        return this.$store.state.settings.headerReveal;
      },
      set(val) {
        this.$store.commit('settings/setHeaderReveal', val);
      },
    },
    footer: {
      get() {
        return this.$store.state.settings.footer;
      },
      set(val) {
        this.$store.commit('settings/setFooter', val);
      },
    },
    footerReveal: {
      get() {
        return this.$store.state.settings.footerReveal;
      },
      set(val) {
        this.$store.commit('settings/setFooterReveal', val);
      },
    },
    leftOverlay: {
      get() {
        return this.$store.state.settings.leftOverlay;
      },
      set(val) {
        this.$store.commit('settings/setLeftOverlay', val);
      },
    },
    modelHex: {
      get() {
        return this.$store.state.settings.primaryColor;
      },
      set(val) {
        this.$store.dispatch('settings/setPrimaryColor', val);
      },
    },
    headerIcons: {
      get() {
        return this.$store.state.settings.headerIcons;
      },
      set(val) {
        this.$store.commit('settings/TOGGLE_HEADER_ICONS', val);
      },
    },
    invertColors: {
      get() {
        return this.$store.state.settings.invertColors;
      },
      set(val) {
        this.$store.commit('settings/INVERT_COLORS', val);
      },
    },
  },
};
</script>

<style>

</style>
