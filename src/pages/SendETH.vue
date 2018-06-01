<template>
  <q-page
    padding
    class="row justify-center">
    <div style="width: 600px; max-width: 90vw;">
      <SendETH />
    </div>
  </q-page>
</template>

<script>
import SendETH from '.././components/SendETH';

export default {
  name: 'SendETH',
  components: {
    SendETH,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
