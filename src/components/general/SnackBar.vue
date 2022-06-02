<template>
  <v-snackbar class="notify-snackbar" v-model="global.snackBar.active" top right :timeout="global.snackBar.duration" :color="global.snackBar.color">
    {{ global.snackBar.message }}
    <v-btn dark text @click="global.snackBar.active = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SnackBar',
  computed: {
    ...mapState(['global']),
  },
};
</script>

<style scoped>
  .notify-snackbar {
    margin-top: 0px;
  }
</style>
