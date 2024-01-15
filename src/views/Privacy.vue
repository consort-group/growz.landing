<template>
  <div class="container py">
    <h1>{{ data?.data?.[0]?.title }}</h1>
    <p>{{ data?.data?.[0]?.content }}</p>
  </div>
</template>




<script setup>
import useApi from '../composables/useApi'

const { 
  data,
  loading, 
  error, 
  fetchData
} = useApi();


fetchData('pages', {
  filters: {
    slug: {
      $eq: 'privacy'
    }
  }
})



</script>


<style scoped>
.py {
  padding: 0 20px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>>