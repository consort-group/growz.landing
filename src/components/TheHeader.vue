<template>
  <header class="container header">
    <router-link to="/">
      <logo class="logo" />
    </router-link>

    <nav class="header__nav">
      <ul class="header__nav-list">
        <a href="#">
          <li>{{ $t('home') }}</li>        
        </a>
          <a href="#our-product">
            <li>Our product</li>
          </a>
        
          <a href="#features">
            <li>Features</li>
          </a>
          <a href="#faq">
            <li>FAQ</li>
          </a>
          <a href="#contacts">
            <li>Contacts</li>
          </a>
      </ul>
    </nav>

    <Language :langsData="props.langsData" />

    <div @click="burger = true" class="header__burger">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="header__menu" :class="burger ? 'open' : ''">
      <div @click="burger = false" class="header__menu-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#344054"/>
        </svg>
      </div>
      <ul>
        <li>Home</li>
        <li>Our product</li>
        <li>Features</li>
        <li>FAQ</li>
        <li>Contacts</li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps } from "vue"
import Language from "./Language.vue";
import logo from '../components/icons/logo.vue'

let burger = ref(false)
const props = defineProps(['langsData']);

</script>

<style lang="scss" scoped>
  @import '../assets/mixins';

  .header {
    padding: 40px 0;
    @include flexbox-align-justify-gap-direction(center, space-between);
    .logo {
      cursor: pointer
    }
    &__burger, &__menu {
      display: none;
    }
    &__nav {
      &-list {
        @include flexbox-align-justify-gap-direction(center, space-between, 32px);
        li {
          @include font-color-size-style-weight-height(var(--gray-600), 16px, normal, 400, 24px);
          cursor: pointer;
          &:hover {
            color: var(--green-700);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .header {
      padding: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      &__nav {
        &-list {
          display: none;
        }
      }
      &__burger {
        display: block;
      }
      &__menu {
        position: fixed;
        top: 0;
        right: -100%;
        bottom: 0;
        left: 100%;
        z-index: 2;
        transition: .5s;
        background: var(--base-white);
        @include flexbox-align-justify-gap-direction(center, center, 20px, column);
        li {
          @include font-color-size-style-weight-height(var(--gray-600), 16px, normal, 400, 24px);
          cursor: pointer;
          text-align: center;
          margin: 10px 0;
          &:hover {
            color: var(--green-700);
          }
        }
        &-close {
          position: absolute;
          top: 25px;
          right: 20px;
          cursor: pointer;
        }
      }
      .open {
        left: 0;
        right: 0;
      }
    }
  }
</style>