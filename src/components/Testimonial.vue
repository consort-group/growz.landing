<template>
  <div class="swiper-wrapper">
    <div class="container">
      <swiper
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="true"
      >
        <swiper-slide
          class="flex rwd-flex swiper-slide" 
          v-for="(item, index) in props.testimonialsData?.data" 
          :key="index"
        >
          <div class="flex-item">
            <Rate :rate="item?.stars" />
            <h3 class="flex-item__title">{{ item?.comment }}</h3>
            <div class="flex m-top justify-between">
              <div class="flex gap-4">
                <div class="flex-avatar">
                  <img :src="item?.avatar" alt="">
                </div>
                <div class="flex-avatar-content">
                  <h4>{{ item?.name }}</h4>
                  <p>{{ item?.company }}</p>
                </div>
              </div>
              <div class="flex gap-8">
                <div class="swiper-button-prev" @click="swiper?.slidePrev()">
                  <LeftArrow />
                </div>
                <div class="swiper-button-next" @click="swiper?.slideNext()">
                  <RightArrow />
                </div>
              </div>
            </div>
          </div>
          <div class="flex-item">
            <div class="main-image">
              <img :src="item?.avatar" alt="">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'
import LeftArrow from '../components/icons/left-arrow.vue'
import RightArrow from '../components/icons/right-arrow.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import Rate from './Rate.vue'
import 'swiper/css';

const props = defineProps(['testimonialsData'])

const items = [
  { imageUrl: 'path-to-your-image-1.jpg' },
  { imageUrl: 'path-to-your-image-2.jpg' },
  { imageUrl: 'path-to-your-image-3.jpg' },
];




</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}

  @media screen and (max-width: 1300px) {
    .rwd-flex {
      padding: 30px 20px;
      flex-direction: column;
      gap: 48px;
      width: 100% !important;
      .flex-item {
        max-width: 576px;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 651px) {
    .rwd-flex {
      width: 100% !important;
    }
  }
.main-image {
  max-width: 576px;
  margin: 0 auto;
  height: 720px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-slide {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
  align-items: center;
}
.gap-8 {
  gap: 32px;
}

.swiper-wrapper {
  background: #F9FAFB;
  margin-top: 160px;
}
.gap-4 {
  gap: 18px;
}
.m-top {
  margin-top: 68px;
}
.flex {
  display: flex;
  &-avatar {
    border-radius: 100%;
    overflow: hidden;
    width: 56px;
    height: 56px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-avatar-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    h4 {
      color: #101828;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
    }
    p {
      color: #475467;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
  &-item {
    flex: 1;
    &__title {
      color: #101828;
      font-size: 48px;
      font-style: normal;
      font-weight: 500;
      line-height: 60px;
      letter-spacing: -0.96px;
    }
  }

}
</style>