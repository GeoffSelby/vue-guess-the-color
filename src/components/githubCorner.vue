<template>
  <div class="fixed pin-t pin-r w-18 h-18">
    <a href="https://github.com/GeoffSelby/vue-guess-the-color">
      <svg class="fill-current" :class="isDarkContrast ? 'text-white' : 'text-black'" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>GitHub</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
          <g id="Start-Screen" transform="translate(-1360.000000, 0.000000)">
            <g id="github-corner-right" transform="translate(1360.000000, 0.000000)">
              <path d="M44.7346939,43.8530612 L45.44,44.48 C45.44,44.48 44.8,43.2 45.12,42.88 L48.96,39.36 C50.24,38.08 50.56,36.8 50.56,35.84 C54.08,38.4 58.56,40.32 63.68,35.2 C65.28,33.6 65.92,32 65.92,30.08 C66.56,30.08 68.16,29.12 69.44,26.56 C69.44,26.56 68.48,25.28 64,24.32 C63.36,23.04 62.4,21.76 61.12,20.48 C59.84,19.2 58.56,18.24 57.28,17.6 C56.64,13.44 55.04,12.48 55.04,12.48 C52.16,13.76 51.52,15.36 51.2,16 C49.28,16 47.68,16.64 46.08,18.24 C40.64,23.68 42.88,27.84 45.44,31.36 C44.8,31.36 43.84,31.68 42.88,32.32 L42.2850686,32.9149314 C41.0124458,32.2305775 39.5583382,30.6988727 40.32,28.16 C40.32,28.16 40.96,26.24 39.68,24.64 C39.68,24.64 38.4,23.04 38.72,25.28 C38.72,25.28 39.04,26.56 38.08,28.8 C38.08,28.8 36.2676828,31.8205286 40.5664781,34.6335219 L38.4,36.8 L36.8,36.8 L0,0 L80,0 L80,80 L45.44,45.44 L44.7346939,43.8530612 Z" id="Combined-Shape"></path>
            </g>
          </g>
        </g>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['isDarkContrast'],
}
</script>

