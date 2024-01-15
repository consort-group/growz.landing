<template>
  <section class="container banner">
    <div class="column">
      <h1 class="banner__title">{{ props.mainInfoData?.data?.banner_title }}</h1>
      <p class="banner__text">{{ props.mainInfoData?.data?.banner_description }}</p>
      <div class="banner__app-link">
        <a :href="props.mainInfoData?.data?.play_market_link">
          <appstore />
        </a>
        <a :href="props.mainInfoData?.data?.app_store_link">
          <playmarket />
        </a>
      </div>
    </div>
    <div class="column banner__image">
      <img src="../assets/banner-img.png" alt="Image of Beautiful analytics to grow smarter">
    </div>
  </section>
</template>


<script setup>
import appstore from "./icons/appstore.vue"
import playmarket from "./icons/playmarket.vue"
import { defineProps } from 'vue'

const props = defineProps(['mainInfoData'])

</script>


<style lang="scss" scoped>
  @import '../assets/mixins';

  .banner {
    @include flexbox-align-justify-gap-direction(center, space-between, 120px);
    padding-bottom: 96px;
    .column {
      flex: 1;
    }
    &__image {
      border-radius: 16px;
      overflow: hidden;
      width: 592px;
      height: 488px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__title {
      @include font-color-size-style-weight-height(var(--gray-900), 60px, normal, 600, 72px);
      letter-spacing: -1.2px;
    }
    &__text {
      @include font-color-size-style-weight-height(var(--gray-600), 20px, normal, 400, 30px);
      margin-top: 24px;
    }
    &__app-link {
      @include flexbox-align-justify-gap-direction(center, start, 12px);
      margin-top: 48px;
    }
  }

  @media screen and (max-width: 1300px) {
    .banner {
      padding: 0 20px 96px;
    }
  }

  @media screen and (max-width: 992px) {
    .banner {
      flex-direction: column-reverse;
      gap: 20px;
      &__image {
        width: 100%;
        max-height: 450px;
      }
      &__title {
        font-size: 36px;
        line-height: 44px;
      }
      &__text {
        font-size: 18px;
        line-height: 28px; 
        margin-top: 16px;
      }
      &__app-link {
        margin-top: 32px;
      }
    }
  }
</style>