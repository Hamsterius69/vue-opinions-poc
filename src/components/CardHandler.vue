<template>
  <v-container fluit>
    <v-row v-for="(person, index) in people" :key="index">
      <vote-card :person="person"/>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import initialData from '@/assets/data.json'
import VoteCard from '@/components/VoteCard.vue'
export default {
  name: 'cardHandler',
  components: {
    VoteCard
  },
  data() {
    return {
    }
  },
  beforeMount() {
    this.loadInitialData();
  },
  computed: {
    ...mapState({
      people: (state) => state.cards.people,
    }),
  },
  methods: {
    loadInitialData() {
      const size = initialData.data.length;
      for (let i = 0; i < size; i += 1) {
        const person = {
          id: i,
          name: initialData.data[i].name,
          description: initialData.data[i].description,
          category: initialData.data[i].category,
          picture: initialData.data[i].picture.split('.')[0],
          lastUpdated: initialData.data[i].lastUpdated,
          votes: {
            positive: initialData.data[i].votes.positive,
            negative: initialData.data[i].votes.negative
          },
          elapsedTime: `${this.getElapsedTime(initialData.data[i].lastUpdated)} in ${initialData.data[i].category}`,
          isPositive: initialData.data[i].votes.positive > initialData.data[i].votes.negative ? true : false,
          positivePercentag: this.getPorcentag(initialData.data[i].votes.positive + initialData.data[i].votes.negative, initialData.data[i].votes.positive),
          negativePercentag: this.getPorcentag(initialData.data[i].votes.positive + initialData.data[i].votes.negative, initialData.data[i].votes.negative)
        }
        this.$store.dispatch('addPerson', person);
      }
    },
  }
}
</script>

<style scoped>

</style>
