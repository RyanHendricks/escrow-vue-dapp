<template>
  <q-list
    no-border
    link
    inset-delimiter>
    <q-list-header>Connection</q-list-header>
    <q-item>
      <q-item-side>
        <q-item-tile
          color="primary"
          icon="network check" />
      </q-item-side>
      <q-item-main>
        <q-item-tile sublabel>Connected Network</q-item-tile>
        <q-item-tile label>{{ network }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side>
        <q-item-tile
          color="primary"
          icon="sync" />
      </q-item-side>
      <q-item-main>
        <q-item-tile
          label>Current Provider</q-item-tile>
        <q-item-tile
          sublabel>{{ provider }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side>
        <q-item-tile
          color="primary"
          icon="local gas station" />
      </q-item-side>
      <q-item-main>
        <q-item-tile label>Gas Price (Gwei)</q-item-tile>
        <q-item-tile sublabel>{{ gasPrice }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side>
        <q-item-tile
          color="primary"
          icon="link" />
      </q-item-side>
      <q-item-main>
        <q-item-tile label>Last Block</q-item-tile>
        <q-item-tile sublabel>{{ blockNumber }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side>
        <q-item-tile
          color="primary"
          icon="language" />
      </q-item-side>
      <q-item-main>
        <q-item-tile label>Injected Provider?</q-item-tile>
        <q-item-tile sublabel>{{ isInjected }}</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DrawerLinks',
  data() {
    return {
    };
  },
  computed: {
    ...mapState('ethengine', ['isInjected', 'blockNumber', 'network', 'gasPrice', 'provider']),
  },
};
</script>

<style>
</style>
