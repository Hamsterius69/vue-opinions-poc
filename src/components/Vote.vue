<template>
  <v-container fluit>
    <v-row class="vote__elapsed-time">
      <div class="vote__elapsed-time-text"> {{ headerText }} </div>
    </v-row>
    <v-row>
      <v-col cols="2" lass="vote__thumbs-col">
        <button class="vote__thumbs vote__thumbs-like--color" :style="likeActive ? btnActive: ''" @click="likeSelected()">
          <v-img class="vote__thumbs--image" :src="require('../assets/img/thumbs-up.svg')"/>
        </button>
      </v-col>
      <v-col cols="2" class="vote__thumbs-col vote__thumbs-col--right">
        <button class="vote__thumbs vote__thumbs-dislike--color" :style="dislikeActive ? btnActive: ''" @click="dislikeSelected()">
          <v-img class="vote__thumbs--image" :src="require('../assets/img/thumbs-down.svg')"/>
        </button>
      </v-col>
      <v-col>
        <v-btn dark large class="vote__btn" @click="btnPressed()" :loading="isLoading">
          {{voteBtnText}}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'vote',
  props: {
    person: {
      type: Object,
      require: true
    },
  },
  data() {
    return {
      isLoading: false,
      btnActive: 'border: 1px solid #ffffff',
      likeActive: false,
      dislikeActive: false,
      voteBtnText: 'Vote now',
      headerText: '',
      isAlreadyVote: false,
    }
  },
  beforeMount() {
    this.initialData();
  },
  methods: {
    initialData() {
      this.updatedPerson = this.person;
      this.headerText = this.person.elapsedTime;
    },
    likeSelected() {
      this.likeActive = true;
      this.dislikeActive = false;
    },
    dislikeSelected() {
      this.likeActive = false;
      this.dislikeActive = true;
    },
    btnPressed() {
      if (this.isAlreadyVote) {
        this.resetVoteBtn();
      } else {
        this.vote();
      }
    },
    resetVoteBtn() {
      this.voteBtnText = 'Vote now';
      this.headerText = this.person.elapsedTime
      this.likeActive = false;
      this.dislikeActive = false;
      this.isAlreadyVote = false;
    },
    async vote() {
      if (!this.likeActive && !this.dislikeActive) {
        this.notifySnackBar('You have to select like or dislike','alert');
      } else {
        this.isLoading = true;
        await this.delay(1000); // this is to simulate the time of a http request
        if (this.likeActive) {
          this.updatedPerson.votes.positive += 1;
        } else if (this.dislikeActive) {
          this.updatedPerson.votes.negative += 1; 
        }
        this.updatedPerson.isPositive = this.updatedPerson.votes.positive > this.updatedPerson.votes.negative ? true : false,
        this.updatedPerson.positivePercentag = this.getPorcentag(this.updatedPerson.votes.positive + this.updatedPerson.votes.negative, this.updatedPerson.votes.positive),
        this.updatedPerson.negativePercentag = this.getPorcentag(this.updatedPerson.votes.positive + this.updatedPerson.votes.negative, this.updatedPerson.votes.negative)
        this.$store.dispatch('setPerson', this.updatedPerson);
        this.voteBtnText = 'Vote Again';
        this.headerText = 'thanks you for your vote!'
        this.likeActive = false;
        this.dislikeActive = false;
        this.isAlreadyVote = true;
        this.isLoading = false;
      }
    },
  }
}
</script>

<style scoped>
.vote__thumbs {
  height: 45px;
  width: 45px;
  padding: 50%;
}

.vote__elapsed-time {
  font-family: Lato;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  color: white;
  margin-top: 2px;
  margin-right: 25px;
}

.vote__elapsed-time-text {
  margin-left: auto; 
  margin-right: 0;
}

.vote__thumbs-like--color {
  background-color: rgba(59, 185, 179, 0.8);
}

.vote__thumbs-dislike--color {
  background-color: #fbbd4a;
}

.vote__btn--border {
  border: 1px solid #ffffff;
}

.vote__thumbs--image {
  height: 20px;
  width: 20px;
}

.vote__thumbs-col {
  margin-left: 5px;
}

.vote__btn {
  margin-left: 5px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 0;
  border: 1px solid #ffffff;
}
</style>
