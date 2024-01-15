<template>
  <div class="flex">
    <email v-if="props.index == 1" />
    <location v-if="props.index == 2" />
    <phone v-if="props.index == 3" />

    <div class="flex-item">
      <h4 class="title">{{ props.index == 1 ? 'Email' : props.index == 2 ? 'Office' : 'Phone' }}</h4>
      <p class="text">Our friendly team is here to help.</p>
      <p class="contact">{{ props.data }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import email from './icons/email.vue';
import location from './icons/location.vue';
import phone from './icons/phone.vue';

const props = defineProps(['data', 'index'])
</script>

<style lang="scss" scoped>
svg {
  display: flex;
  flex-shrink: 0;
}
.flex {
  display: flex;
  gap: 16px;
  &-item {
    .title {
      color: #101828;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
    }
    .text {
      color: #475467;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-top: 8px;
    }
    .contact {
      color: #007E27;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      margin-top: 20px;
    }
  }
}
</style>