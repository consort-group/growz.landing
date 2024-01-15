<template>
  <the-banner :mainInfoData="mainInfoData"/>
  <our-product :featuresSingleData="featuresSingleData" />
  <features :featuresData="featuresData" /> 
  <the-accordion :faqsData="faqsData"  />
  <conclusion />
  <testimonial :testimonialsData="testimonialsData" />
  <contact-us :mainInfoData="mainInfoData" />
</template>


<script setup>
import { onMounted } from 'vue'
import useApi from '../composables/useApi';
import TheBanner from "../components/TheBanner.vue";
import OurProduct from "../components/OurProduct.vue";
import Features from "../components/Features.vue";
import TheAccordion from "../components/TheAccordion.vue";
import Conclusion from "../components/Conclusion.vue";
import Testimonial from '../components/Testimonial.vue';
import ContactUs from '../components/ContactUs.vue';

const { 
  data: featuresData,
  loading: featuresLoading, 
  error: featuresError, 
  fetchData: getFeatures
} = useApi();
const { 
  data: featuresSingleData,
  loading: featuresSingleLoading, 
  error: featuresSingleError, 
  fetchData: getFeaturesSingle
} = useApi();

const { 
  data: testimonialsData,
  loading: testimonialsLoading,
  error: testimonialsError,
  fetchData: getTestimonials
} = useApi()

const { 
  data: faqsData,
  loading: faqsLoading,
  error: faqsError,
  fetchData: getFaqs
} = useApi()

const { 
  data: contactFormsData,
  loading: contactFormsLoading,
  error: contactFormsError,
  fetchData: getContactForms
} = useApi()

const { 
  data: mainInfoData,
  loading: mainInfoLoading,
  error: mainInfoError,
  fetchData: getMainInfo
} = useApi()

const { 
  data: langsData,
  loading: langsLoading,
  error: langsError,
  fetchData: getLangs
} = useApi()



onMounted(() => {
  // getLangs('langs', {
  //   // locale: JSON.parse(localStorage.getItem('locale'))
  // })
  getFeaturesSingle('features', {
    filters: {
      order: {
        $eq: 1
      }
    },
    locale: JSON.parse(localStorage.getItem('locale'))
  })
  getFeatures('features', {
    sort: 'order:asc',
    filters: {
      order: {
        $ne: 1
      }
    },
    locale: JSON.parse(localStorage.getItem('locale'))
  })
  getTestimonials('testimonials', {
    // locale: JSON.parse(localStorage.getItem('locale'))
  })
  getFaqs('faqs', {
    locale: JSON.parse(localStorage.getItem('locale'))
  })
  getContactForms('contact-forms', {
    locale: JSON.parse(localStorage.getItem('locale'))
  })
  getMainInfo('main-info', {
    locale: JSON.parse(localStorage.getItem('locale'))
  })
})


</script>
