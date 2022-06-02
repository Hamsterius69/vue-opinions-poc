<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <p class="card-handler--title">Previous Rulings</p>
      </v-col>
      <v-col cols="3" data-app v-if="$vuetify.breakpoint.width > 821">
        <v-select :items="items" dense solo v-model="selectValue"/>
      </v-col>
    </v-row>
    <div v-if="$vuetify.breakpoint.width > 821">
      <v-row :class="selectValue === 'Grid' ? 'card-handler__card--position' : ''" v-for="(person, index) in people" :key="index">
        <vote-card v-if="selectValue === 'List'" :person="person"/>
        <vote-card-grid v-else class="card-handler__card-grid" :person="person"/>
      </v-row>
    </div>
    <horizontal-scroll v-else>
      <v-row class="card-handler__card--position" v-for="(person, index) in people" :key="index">
        <vote-card-grid class="card-handler__card-grid" :person="person"/>
      </v-row>
    </horizontal-scroll>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import initialData from '@/assets/data.json'
import VoteCard from '@/components/VoteCard.vue'
import VoteCardGrid from '@/components/VoteCardGrid.vue'
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
export default {
  name: 'cardHandler',
  components: {
    VoteCard,
    VoteCardGrid,
    HorizontalScroll
  },
  data() {
    return {
      peopleLocalStorage: null,
      selectValue: 'List',
      items: ['List', 'Grid']
    }
  },
  beforeMount() {
    this.initialData();
  },
  computed: {
    ...mapState({
      people: (state) => state.cards.people,
    }),
  },
  methods: {
    initialData() {
      this.peopleLocalStorage = JSON.parse(localStorage.getItem('people'));
      if (this.peopleLocalStorage) {
        this.$store.dispatch('setPeople', this.peopleLocalStorage);
      } else {
        this.loadInitialDataFromJson();
      }
    },
    loadInitialDataFromJson() {
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
      localStorage.setItem('people', JSON.stringify(this.people));
    },
  }
}
</script>

<style scoped>
.card-handler__card--position {
  display: inline-block;
}

.card-handler__card-grid {
  margin: 0px 16px 50px 16px;
}

.card-handler--title {
  font-family: Lato;
  font-size: 45px;
  font-weight: 300;
  line-height: 54px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
