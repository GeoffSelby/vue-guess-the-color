<template>
  <div class="home">
    <h1 class="font-light mb-4 md:text-5xl text-black text-center tracking-wide uppercase">Guess The Color</h1>
    <h2 class="font-light mb-12 text-black text-center tracking-wide">How well do you know RGB colors?</h2>
    <p class="text-center">
      <router-link to="/play" class="bg-blue font-light no-underline px-16 py-3 rounded text-2xl text-center text-white tracking-wide">Play</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
