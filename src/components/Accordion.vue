<template>
  <div id="faq" class="accordion" :class="{'bordered': props.index != 0}">
      <div class="accordion__head" @click="accordion = !accordion">
        <h4 class="accordion__head-title">{{ props.title }}</h4>
        <plus v-show="!accordion" />
        <minus v-show="accordion" />
      </div>
      <div class="accordion__content" :class="{'h-auto': accordion}">
        <p class="accordion__content-text">{{ props.text }}</p>
      </div>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue';
import plus from './icons/plus.vue'
import minus from './icons/minus.vue'

const props = defineProps({
  title: String,
  text: String,
  index: Number
});
let accordion = ref(false)
</script>

<style lang="scss" scoped>
@import '../assets/mixins';

.bordered {
  border-top: 1px solid var(--gray-200);
}
.accordion {
  max-width: 768px;
  margin: 0 auto;
  padding: 16px 0;

  &__head {
    @include flexbox-align-justify-gap-direction(center, space-between);
    cursor: pointer;
    &-title {
      @include font-color-size-style-weight-height(var(--gray-900), 18px, normal, 500, 28px);
    }
  }
  &__content {
    margin-top: 8px;
    padding-right: 40px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out !important;
    &-text {
      @include font-color-size-style-weight-height(var(--gray-600), 16px, normal, 400, 24px);
    }
  }
  .h-auto {
    height: auto;
  }
}
</style>