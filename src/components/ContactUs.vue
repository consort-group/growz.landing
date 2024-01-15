<template>
  <div>
    <div id="contacts" class="container contact-us">
      <h4 class="subtitle">Contact us</h4>
      <h2 class="title">Get in touch</h2>
      <p class="text">Our friendly team would love to hear from you.</p>
      <div class="root m-top">
        <div class="contact-us__item">
          <contact-item :data="props.mainInfoData?.data?.email" :index="1" />
          <contact-item :data="props.mainInfoData?.data?.address" :index="2" />
          <contact-item :data="props.mainInfoData?.data?.phone" :index="3" />
        </div>
        <div class="map">
          <Map :data="props.mainInfoData?.data?.location" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ContactItem from './ContactItem.vue';
import Map from './Map.vue';

const props = defineProps(['mainInfoData'])


</script>

<style lang="scss" scoped>
@import '../assets/mixins';
.subtitle {
  @include font-color-size-style-weight-height(var(--green-700), 16px, normal, 600, 24px);
  max-width: 800px;
}
.m-top {
  margin-top: 64px;
}
.py {
  padding: 120px 0;
}
.map {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  @include font-color-size-style-weight-height(var(--gray-900), 36px, normal, 600, 44px);
  letter-spacing: -0.72px;
  max-width: 800px;
  margin-top: 12px;
}
.text {
  @include font-color-size-style-weight-height(var(--gray-600), 20px, normal, 400, 28px);
  max-width: 800px;
  margin-top: 20px;
}

.contact-us {
  padding: 96px 20px 0;
  &__item {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
}

.root {
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
  .map {
    width: 80%;
    #mapContainer {
      width: 100%;
    }
  }
}

@media screen and (max-width: 950px) {
  .root {
    flex-direction: column;
  }
}
</style>