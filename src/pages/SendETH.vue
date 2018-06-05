<template>
  <q-page
    padding
    class="row justify-center">
    <div
      class="col; q-ma-md"
      style="width: 600px; max-width: 90vw;">
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
