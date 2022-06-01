<template>
<v-container>
  <v-card outlined>
    <v-row class="vote-card">
      <v-col cols="3" class="vote-card__image-col">
        <v-img class="vote-card__image" height="170" :src="require('../assets/img/cristina-desktop-list.png')" gradient="to right, rgba(0,0,0,0), #8c8a8a">
          <div class="vote-card__thumbs-container">
            <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-up.svg')"/>
          </div>
        </v-img>
      </v-col>
      <v-col cols="9" class="vote-card__text-col">
        <v-row>
          <v-col cols="8">
            <v-row>
              <p class="vote-card__text-col--title">Cristina Fernandez de kirchner</p>
            </v-row>
            <v-row>
              <p class="vote-card__text-col--detail">Vestibulum diam ante, porttitor a odio eget, neque. Aenean eu velit ...</p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <vote elapsedTime="One year in politics"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
  <v-row class="vote-card__percentage">
    <v-col>
      <v-row>
        <div class="vote-card__thumbs--position">
          <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-up.svg')"/>
        </div>
        <div class="vote-card__thumbs-text--position">
          <p>56.3%</p>
        </div>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <div class="vote-card__thumbs-text--position  vote-card__thumbs-text--position-right">
          <p>56.3%</p>
        </div>
        <div class="vote-card__thumbs--position">
          <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-down.svg')"/>
        </div>
      </v-row>
    </v-col>
  </v-row>
  <v-row class="vote-card__percentage--color">
    <v-col class="vote-card__percentage-like--color"></v-col>
    <v-col class="vote-card__percentage-dislike--color"></v-col>
  </v-row>
  </v-container>
</template>

<script>

import Vote from '@/components/Vote.vue'

export default {
  name: 'VoteCard',
  components: {
    Vote
  },
  props: {
    image: {
      type: String,
      require: false,
    },
  }
}
</script>

<style scoped>
.vote-card {
  padding: 0;
  padding-bottom: 0;
  z-index: 10;
}

.vote-card__image-col {
  padding: 0;
}

.vote-card__text-col {
  background: linear-gradient(to right, #8c8a8a, #c2bcbc);
}

.vote-card__text-col--title {
  font-family: Lato;
  font-size: 36px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
}

.vote-card__text-col--detail {
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
}

.vote-card__thumbs-container {
  width: 45px;
  height: 45px;
  background: rgba(59, 185, 179, 0.8);
  border: none;
  padding-top: 10%;
  margin-left: -100%;
}

.vote-card__result-thumbs {
  height: 20px;
  width: 20px;
  margin: auto;
}

.vote-card__image {
  background: rgba(59, 185, 179, 0.8);
}

.vote-card__percentage-like--color {
  background: rgba(59, 185, 179, 0.8);
}

.vote-card__percentage-dislike--color {
  background: #fbbd4a;
}

.vote-card__percentage {
  height: 54px;
  margin-top: -32px !important;
  padding: 0;
  padding-top: 0;
  position: relative;
  z-index: 1;
}

.vote-card__thumbs-text--position {
  margin: 2px;
  color: white;
  font-family: Lato;
  font-size: 27px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.vote-card__thumbs--position {
  margin: 8px;
}

.vote-card__percentage--color {
  height: 54px;
  margin-top: -54px !important;
  z-index: 0;
  padding: 0;
  padding-bottom: 1%;
  position: relative;
}

.thumbs-down {
  width: 10px;
  height: 10px;
  background: #fbbd4a;
  border: none;
  margin-right: 8px;
  margin-top: 4px;
  cursor: pointer;
}

.vote-card__thumbs-text--position-right {
  margin-left: auto; 
  margin-right: 0;
}
</style>
