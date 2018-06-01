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
      label="Layout"
      helper="Adjust dApp Layout">
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
          label="Desktop Mode" />
      </div>
    </q-field>
    <q-item-separator />
  </q-list>
</template>

<script>
export default {
  name: 'LayoutSettings',
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
  },
};
</script>

<style>

</style>
