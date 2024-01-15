<template>
  <div class="stars">
    <span v-for="index in 5" :key="index" class="star">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        :fill="index <= props.rate ? '#FEC84B' : 'gray'"
        class="star-icon"
      >
        <path
          d="M12 2L15.09 8.34L22 9.27L17 14.24L18.18 21L12 17.77L5.82 21L7 14.24L2 9.27L8.91 8.34L12 2Z"
        />
      </svg>
    </span>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps(['rate'])

const yellowStars = computed(() => props.rate);
const hasHalfStar = computed(() => props.rate % 1 !== 0);
</script>

<style scoped>
.stars {
  display: flex;
  align-items: center;
}

.star {
  margin-right: 0.2rem;
}

.star-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: gray;
}

.star-icon:nth-child(-n + yellowStars) {
  color: yellow;
}

.star-icon.half-star {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
}
</style>