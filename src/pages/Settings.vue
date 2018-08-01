<template>
  <q-page
    padding
    class="row justify-center">
    <div style="width: 600px; max-width: 90vw;">
      Settings
      <DappSettings />


    </div>
  </q-page>
</template>

<script>
import DappSettings from '.././components/settings/DappSettings';

export default {
  name: 'Settings',
  components: {
    DappSettings,
  },
  data: () => ({
    // modelHex: '#C7044B',
  }),
  computed: {
    modelHex: {
      get() {
        return this.$store.state.settings.primaryColor;
      },
      set(val) {
        this.$store.dispatch('settings/setPrimaryColor', val);
      },
    },

  },
};
</script>

<style>
</style>
