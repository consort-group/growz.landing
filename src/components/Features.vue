<template>
  <section id="features" class="container py wrapper-features">
    <div>
      <h4 class="subtitle">Features</h4>
      <h2 class="title">Info today stop those cross a ground. Shift.</h2>
      <p class="text">Data book picture follow well hanging anyway. Baseline whatever spaces pulling half economy idea this. But die unit productize finish stop meeting donuts backwards.</p>
    </div>

    <div 
      v-for="(item, index) in props.featuresData?.data"
      :key="index" 
      :id="item.id"
      class="features"
      :class="index % 2 == 1 ? 'features_reverse' : ''"
    >
      <div class="column">
        <img :src="item.image_path" :alt="'Image of ' + item.title ">
      </div>
      <div class="column">
        <h3 class="features__title">{{ item.title }}</h3>
        <p class="features__text">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, reactive, onMounted, onUnmounted, defineProps } from 'vue';
import img1 from '../assets/phone-1.png'
import img2 from '../assets/phone-2.png'
import img3 from '../assets/phone-3.png'
import img4 from '../assets/phone-4.png'
import img5 from '../assets/phone-5.png'

const props = defineProps(['featuresData'])
const data = reactive([
  {
    title: "Add and observe your fields",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and the loop.",
    img: img1,
    id: 'one'
  },
  {
    title: "Give any questions to experts",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and the loop.",
    img: img2,
    id: "two"
  },
  {
    title: "Analyze your soil",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and the loop.",
    img: img3,
    id: "tree"
  },
  {
    title: "Weather forecast",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and the loop.",
    img: img4,
    id: "four"
  },
  {
    title: "Add and observe your fields",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and the loop.",
    img: img5,
    id: "five"
  }
])

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>


<style lang="scss" scoped>
  @import '../assets/mixins';
  .subtitle {
    @include font-color-size-style-weight-height(var(--green-700), 16px, normal, 600, 24px);
    max-width: 800px;
  }
  .py {
    padding: 120px 0;
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
  .features {
    @include flexbox-align-justify-gap-direction(center, center, 40px, row);
    padding: 40px 0;
    .column {
      flex: 1;
      img {
        width: 100%;
      }
    }
    &__title {
      @include font-color-size-style-weight-height(var(--gray-900), 30px, normal, 600, 38px);
    }
    &__text {
      @include font-color-size-style-weight-height(var(--gray-600), 18px, normal, 400, 28px);
      margin-top: 16px;
    }

  }

  .features_reverse {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1302px) {
    .wrapper-features {
      padding: 120px 20px;
    }
  }

  @media screen and (max-width: 992px) {
    .features {
      flex-direction: column;
    }
  }
</style>