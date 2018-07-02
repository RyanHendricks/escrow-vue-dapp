<template>
  <div>
    <h6>Create a new escrow contract</h6>

    <!-- Input for Buyer Address -->
    <q-field
      class="q-pa-md"
      icon="shopping_cart"
      helper="Enter the address of the buyer.">
      <q-input
        v-model="buyer"
        float-label="Buyer Address" />
    </q-field>

    <!-- Input for Seller Address -->
    <q-field
      class="q-pa-md"
      icon="store"
      helper="Enter the address of the seller">
      <q-input
        v-model="seller"
        float-label="Seller Address" />
    </q-field>

    <!-- Input for Purchase Amount -->
    <q-field
      dense
      class="q-pa-md"
      icon="money"
      helper="Amount of ETH buyer to pay (total)"
      label="ETH">
      <q-input
        v-model="purchaseAmount"
        float-label="uint256" />
    </q-field>

    <!-- Deploy Contract Button -->
    <q-field
      :helper="this.$store.state.ethengine.account"
      class="q-pa-xs"
    >
      <q-btn
        :disable="!this.$store.state.ethengine.unlocked"
        label="Create Contract"
        color="secondary"
        class="inverted"
        @click="deployContract()" />
    </q-field>

  </div>
</template>

<script>
// import VeoEscrowArtifacts from '.././store/ethcontract/VeoEscrow.js';

export default {
  name: 'ContractDeployer',
  data() {
    return {
      // abi: VeoEscrowArtifacts.abi,
      buyer: '0x7d07c87Ae4173AdA4C1F3befe7118c52dD237725',
      seller: '0x0086a78521179cF58eA9B103FDA754F4f169DeBe',
      purchaseAmount: '1',
      unlocked: this.$store.state.ethengine.unlocked,
    };
  },
  methods: {
    async deployContract() {
      /**
      try {
        if ((this.buyer.length !== 42) || (this.seller.length !== 42)) {
          throw new error(error);
        } else if ((this.buyer.substr(0, 2) !== '0x') || (this.seller.substr(0, 2) !== '0x')) {
          return null;
        }
        */
      const payload = {
        buyer: this.buyer,
        seller: this.seller,
        amount: this.purchaseAmount,
        // abi: JSON.parse(VeoEscrowArtifacts.abi),
      };

      await this.$store.dispatch('ethcontract/deployContract', payload);
    },
  },
};
</script>

<style>
</style>
