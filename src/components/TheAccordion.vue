<template>
  <section class="faq">
    <h6 class="faq__sub-title">Frequently asked questions</h6>
    <h2 class="faq__title">More your impact do breakout</h2>
    <p class="faq__text">Everything you need to know about the product and billing.</p>

    <div class="accordion-wrapper">
      <Accordion 
        v-for="(item, index) in props.faqsData?.data" 
        :key="index" 
        :title="item.question" 
        :text="item.Answer" 
        :index="index" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Accordion from './Accordion.vue';

const props = defineProps(['faqsData'])

</script>

<style lang="scss" scoped>
  @import '../assets/mixins';

  .faq {
    padding: 60px 20px;
    min-width: 650px;
    width: 100%;
    .accordion-wrapper {
      margin-top: 16px;
      & > * {
        transition: .3s;
      }
    }
    &__sub-title {
      @include font-color-size-style-weight-height(var(--green-700), 16px, normal, 600, 24px);
      text-align: center;
    }
    &__title {
      @include font-color-size-style-weight-height(var(--gray-900), 36px, normal, 600, 44px);
      letter-spacing: -0.72px;
      text-align: center;
      margin-top: 12px;
    }
    &__text {
      @include font-color-size-style-weight-height(var(--gray-600), 20px, normal, 400, 30px);
      text-align: center;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .faq {
      &__sub-title {
        font-size: 14px;
        line-height: 20px;
      }
      &__title {
        font-size: 30px;
        line-height: 38px;
      }
      &__text {
        font-size: 18px;
        line-height: 28px;
        margin-top: 16px;
      }
    }
  }
</style>