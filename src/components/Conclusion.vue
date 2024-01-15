<template>
  <section class="conclusion container">
    <div class="conclusion__content column">
      <h3 class="conclusion__content-title">All-in-one finance for any creative business</h3>
      <p class="conclusion__content-text">Personal performance tracking made easy.</p>
      <div class="conclusion__content-buttons">
        <appstoreWhite />
        <playmarketWhite />
      </div>
    </div>
    <div class="conclusion__image column">
      <img src="../assets/conclusion-phone.png" alt="Image of All-in-one finance for any creative business.">
    </div>
  </section>
</template>



<script setup>
import appstoreWhite from '../components/icons/appstoreWhite.vue'
import playmarketWhite from '../components/icons/appstoreWhite.vue'

</script>


<style lang="scss" scoped>
  @import '../assets/mixins';
  .conclusion {
    @include flexbox-align-justify-gap-direction(center, center);
    border-radius: 32px;
    padding: 130px 88px;
    background: url('../assets/conclusion-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 100px;
    .column {
      flex: 1;
    }
    &__content {
      &-title {
        @include font-color-size-style-weight-height(var(--base-white), 48px, normal, 600, 60px);
        letter-spacing: -0.96px;
      }
      &-text {
        @include font-color-size-style-weight-height(var(--base-white), 20px, normal, 400, 30px);
        margin-top: 20px;
      }
      &-buttons {
        @include flexbox-align-justify-gap-direction(center, start, 12px);
        margin-top: 40px;
        cursor: pointer;
      }
    }
    &__image {
      position: relative;
      img {
        position: absolute;
        top: -335px;
        left: 58%;
        transform: translateX(-50%);
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .conclusion {
      margin: 0 20px;
    }
  }
  @media screen and (max-width: 850px) {
    .conclusion {
      padding: 50px 20px;
      &__content {
        &-title {
          font-size: 36px;
          line-height: 44px;
        }
        &-text {
          font-size: 18px;
          line-height: 28px;
        }
      }
      &__image {
        display: none;
      }
    }
  }
</style>