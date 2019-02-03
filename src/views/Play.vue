<template>
  <div class="play">
    <div v-if="!winner && !loser">
      <h1 class="font-light mb-10 text-3xl md:text-5xl text-black text-center tracking-wide">What is {{ targetColor }}?</h1>
      <div class="container mx-auto flex flex-wrap justify-between">
        <div
          v-for="color in colors"
          @click="checkGuess(color)"
          class="box rounded shadow mb-6 cursor-pointer hover:shadow-lg"
          :class="color.active ? '' : 'disabled'"
          :style="{ backgroundColor: color.color }"
          :key="color.id"
        />
      </div>
      <p class="text-center">
        <button
          class="bg-blue text-white font-light no-underline px-16 py-3 rounded text-2xl text-center tracking-wide"
          @click="startGame"
        >
          Start Over
        </button>
      </p>
    </div>
    <div v-if="winner">
      <h1 class="font-light mb-10 text-5xl text-center tracking-wide" :class="isDarkContrast ? 'text-white' : 'text-black'">That's Right!</h1>
      <p class="text-center">
        <button
          class="font-light no-underline px-16 py-3 rounded text-2xl text-center tracking-wide"
          :class="isDarkContrast ? 'bg-white text-black' : 'bg-black text-white'"
          @click="startGame"
        >
          Play Again
        </button>
      </p>
    </div>
    <div v-if="loser">
      <h1 class="text-black font-light mb-10 text-5xl text-center tracking-wide">You Lose!</h1>
      <p class="text-center">
        <button
          class="bg-black text-white font-light no-underline px-16 py-3 rounded text-2xl text-center tracking-wide"
          @click="startGame"
        >
          Play Again
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play',
  props: ['isDarkContrast'],
  data() {
    return {
      winner: false,
      loser: false,
      guessesLeft: 5,
      numBoxes: 6,
      colors: [],
    }
  },
  computed: {
    targetColor() {
      const random = Math.floor(Math.random() * this.colors.length);

      return this.colors[random].color;
    }
  },
  methods: {
    makeColors() {
      for (let i = 0; i < this.numBoxes; i++) {
        this.colors.push({
          id: i,
          active: true,
          color: this.randomColor(),
        });
      }
    },

    randomColor() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);

      return `rgb(${red}, ${green}, ${blue})`;
    },

    checkGuess(color) {
      const colorIndex = this.colors.indexOf(color);
      this.guessesLeft--;
      if (color.color !== this.targetColor) {
        this.colors[colorIndex].active = false;
        if (this.guessesLeft === 0) {
          this.loser = true;
        }
      } else {
        this.winner = true;
        this.$emit('winnerWinnerChickenDinner', color.color);
      }
    },

    startGame() {
      this.winner = false;
      this.loser = false;
      this.guessesLeft = 5;
      this.colors = [];
      this.$emit('restartGame');
      this.makeColors();
    }
  },
  beforeMount() {
    this.startGame();
  }
}
</script>

<style>
  .disabled {
    position: relative;
    cursor: not-allowed;
    opacity: 0.25;
  }

  .box {
    width: 30%;
    padding-bottom: 30%;
  }
</style>


