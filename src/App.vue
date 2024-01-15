<template>
  <div>
    <the-header :langsData="langsData" />
    <router-view />
    <the-footer />
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import useApi from './composables/useApi.js';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";


const { 
  data: langsData,
  loading: langsLoading,
  error: langsError,
  fetchData: getLangs
} = useApi()



onMounted(() => {
  getLangs('langs', {
    // locale: JSON.parse(localStorage.getItem('locale'))
  })
})


</script>

<style lang="scss">

</style>
