<template>
  <footer class="footer container">
    <div class="footer__socials">
      <twitter />
      <linkedin />
      <facebook />
      <telegram />
      <youtube />
    </div>
    <logo class="logo" />
    <p class="footer__text">© 2077 GROWZ. All rights reserved.</p>
  </footer>
</template>

<script setup>
import twitter from './icons/twitter.vue'
import linkedin from './icons/linkedin.vue'
import facebook from './icons/facebook.vue'
import telegram from './icons/telegram.vue'
import youtube from './icons/youtube.vue'
import logo from './icons/logo.vue'
</script>

<style lang="scss" scoped>
  @import '../assets/mixins';
  .footer {
    margin-top: 100px;
    @include flexbox-align-justify-gap-direction(center, space-between);
    padding: 48px 0;
    &__socials {
      @include flexbox-align-justify-gap-direction(center, center, 24px);
      svg {
        cursor: pointer;
      }
    }
    &__text {
      @include font-color-size-style-weight-height(var(--gray-500), 16px, normal, 400, 24px);
    }
  }

  @media screen and (max-width: 1300px) {
    .footer {
      padding: 20px;
    }
  }
  @media screen and (max-width: 850px) {
    .footer {
      flex-direction: column;
      gap: 24px;
      .logo {
        order: 1;
      }
      &__socials {
        order: 2;
      }
      &__text {
        order: 3;
      }
    }
  }
</style>