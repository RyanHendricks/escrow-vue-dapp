<template>
  <q-page
    padding
    class="row justify-center">
    <div style="width: 600px; max-width: 90vw;">
      Settings
      <template>
        <q-color-picker v-model="modelHex" />
      </template>


    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Settings',
  components: {
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
