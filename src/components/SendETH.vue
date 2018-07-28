<template>
  <div>
    <h4>Send ETH</h4>
    <q-field
      class="q-ma-lg"
      icon="forward"
      helper="Address to send ETH"
    >
      <q-input
        v-model="toAddress"
        float-label="0x123456789..." />
    </q-field>

    <q-field
      class="q-ma-lg"
      icon="money"
      helper="Amount of ETH"
    >
      <q-input
        v-model="amount"
        float-label="Amount of ETH to send..." />
    </q-field>
    <q-btn
      label="Send"
      primary
      color="secondary"
      inverted
      @click="sendTransaction()" />
  </div>
</template>

<script>
export default {
  name: 'SendETH',
  data: () => ({
    toAddress: '',
    amount: '',
  }),
  computed: {

  },
  methods: {
    async sendTransaction() {
      try {
        const txnPayload = {
          toAddress: this.toAddress,
          fromAddress: this.$store.state.ethengine.account,
          amount: this.amount,
        };
        await this.$store.dispatch('ethcontract/sendTransaction', txnPayload);
      } catch (e) {
        this.$store.dispatch('ethcontract/createNotify', e);
      }
    },
  },
};
</script>

<style>
</style>
