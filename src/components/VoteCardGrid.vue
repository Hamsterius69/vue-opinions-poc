<template>
<div height="348" width="348">
  <v-card height="348" width="348" outlined>
    <v-img class="vote-card__image" height="348" width="348" :src="require(`../assets/img/${person.picture}.@2x.png`)">
      <v-row>
      <v-col cols="1">
        <div v-if="person.isPositive" class="vote-card__thumbs-container vote-card__percentage-like--color">
          <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-up.svg')"/>
        </div>
        <div v-else class="vote-card__thumbs-container vote-card__percentage-dislike--color">
          <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-down.svg')"/>
        </div>
      </v-col>
      <v-col cols="11" >
        <v-row>
          <v-col>
            <v-row>
              <p class="vote-card__text-col--title"> {{ person.name }} </p>
            </v-row>
            <v-row>
              <p class="vote-card__text-col--detail"> {{ person.description }} </p>
            </v-row>
            <v-row>
              <vote :person="person"/>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-img>
  </v-card>
  <v-row class="vote-card__percentage">
    <v-col>
      <v-row>
        <div class="vote-card__thumbs--position">
          <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-up.svg')"/>
        </div>
        <div class="vote-card__thumbs-text--position">
          <p> {{ person.positivePercentag }} </p>
        </div>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <div class="vote-card__thumbs-text--position  vote-card__thumbs-text--position-right">
          <p> {{ person.negativePercentag }} </p>
        </div>
        <div class="vote-card__thumbs--position">
          <v-img class="vote-card__result-thumbs" :src="require('../assets/img/thumbs-down.svg')"/>
        </div>
      </v-row>
    </v-col>
  </v-row>
  <v-row class="vote-card__percentage--color">
    <div class="vote-card__percentage-like--color" :style="`width:${person.positivePercentag}`"></div>
    <div class="vote-card__percentage-dislike--color" :style="`width:${person.negativePercentag}`"></div>
  </v-row>
  </div>
</template>

<script>

import Vote from '@/components/Vote.vue'

export default {
  name: 'VoteCardGrid',
  components: {
    Vote
  },
  props: {
    person: {
      type: Object,
      require: true,
    }
  }
}
</script>

<style scoped>
.vote-card {
  width: 348;
  height: 348;
  padding: 0;
  padding-bottom: 0;
}

.vote-card__image-col {
  padding: 0;
}

.vote-card__text-col--title {
  font-family: Lato;
  font-size: 36px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
  margin-top: -26%;
  margin-left: -28%;
}

.vote-card__text-col--detail {
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  width: 250px;
  margin-left: -28%;
}

.vote-card__thumbs-container {
  width: 30px;
  height: 30px;
  border: none;
  padding-top: 8px;
  margin-top: 130px;
  margin-left: -120px;
}

.vote-card__result-thumbs {
  height: 18px;
  width: 18px;
  margin: auto;
}

.vote-card__image {
  width: 348;
  height: 348;
}

.vote-card__percentage-like--color {
  background: rgba(59, 185, 179, 0.8);
}


.vote-card__percentage-dislike--color {
  background: #fbbd4a;
}

.vote-card__percentage {
  height: 54px;
  width: 348px;
  margin-top: -50px;
  margin-left: 0;
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
  width: 348px;
  margin-top: -54px !important;
  margin-left: 0;
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
