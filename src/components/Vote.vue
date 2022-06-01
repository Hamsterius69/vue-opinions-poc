<template>
  <v-contentiner fluit>
    <v-row class="vote__elapsed-time">
      <div class="vote__elapsed-time-text"> {{headerText}} </div>
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
        <v-btn dark large class="vote__btn" @click="vote" :loading="isLoading"
               :disabled="!likeActive && !dislikeActive">
          {{voteBtnText}}
        </v-btn>
      </v-col>
    </v-row>
  </v-contentiner>
</template>

<script>
export default {
  name: 'vote',
  props: {
    elapsedTime: {
      type: String,
      require: false,
      default: ''
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
      voteAgain: false,
    }
  },
  beforeMount() {
    this.initialData();
  },
  methods: {
    initialData() {
      this.headerText = this.elapsedTime
    },
    likeSelected() {
      this.likeActive = true;
      this.dislikeActive = false;
    },
    dislikeSelected() {
      this.likeActive = false;
      this.dislikeActive = true;
    },
    vote() {
      this.likeActive = false;
      this.dislikeActive = false;
      if (this.voteAgain) {
        this.voteBtnText = 'Vote Again';
        this.headerText = 'thanks you for your vote!'
        this.voteAgain = false;
      } else {
        this.voteBtnText = 'Vote now';
        this.headerText = this.elapsedTime
        this.voteAgain = true;
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
