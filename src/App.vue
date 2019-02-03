<template>
  <div id="app" class="min-h-full flex justify-center items-center" :style="{ backgroundColor: winningColor }">
    <githubCorner v-bind:is-dark-contrast="isDarkContrast"/>
    <router-view
      v-on:winnerWinnerChickenDinner="gameWasWon"
      v-on:restartGame="restartGame"
      v-bind:is-dark-contrast="isDarkContrast"
    />
  </div>
</template>

<script>
import githubCorner from './components/githubCorner.vue';

export default {
  components: {
    githubCorner,
  },
  data() {
    return {
      winningColor: '',
    }
  },
  computed: {
    isDarkContrast() {
      const rgb = this.winningColor.replace(/[^\d,]/g, '').split(',');
      const yiq = ((Number(rgb[0]) * 299) + (Number(rgb[1]) * 587) + (Number(rgb[2]) * 114)) / 1000;

      return yiq < 135;
    }
  },
  methods: {
    restartGame() {
      this.winningColor = '';
    },

    gameWasWon(color) {
      this.winningColor = color;
    }
  }
}
</script>

