<template>
  <section id="our-product" class="wrapper-our-product">
    <div class="our-product container">
      <div class="column">
        <h6 class="our-product__sub-title">Our product</h6>
        <h2 class="our-product__title">{{ props.featuresSingleData?.data?.[0]?.title }}</h2>
        <p class="our-product__text">{{ props.featuresSingleData?.data?.[0]?.description }}</p>
      </div>
      <div class="column our-product__image">
        <img :src="props.featuresSingleData?.data?.[0]?.image_path" alt="Image of High people feed get every marketing six.">
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['featuresSingleData'])
</script>

<style lang="scss" scoped>
  @import '../assets/mixins';
  .wrapper-our-product {
    background-color: var(--gray-50);
    padding-top: 32px;
  }
  .our-product {
    @include flexbox-align-justify-gap-direction(center, space-between, 120px);
    .column {
      flex: 1;
    }
    &__sub-title {
      @include font-color-size-style-weight-height(var(--green-700), 16px, normal, 600, 24px);
    }
    &__title {
      @include font-color-size-style-weight-height(var(--gray-900), 36px, normal, 600, 44px);
      letter-spacing: -0.72px;
      margin-top: 12px;
    }
    &__text {
      @include font-color-size-style-weight-height(var(--gray-600), 20px, normal, 400, 30px);
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1300px) {
    .our-product {
      padding: 0 20px;
      gap: 40px;
      &__image {
        max-width: 400px;
        img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .our-product {
      gap: 30px;
      flex-direction: column;
    }
  }
</style>