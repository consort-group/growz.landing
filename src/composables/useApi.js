import { ref, readonly } from 'vue'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

const useApi = () => {
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async (endpoint, params = {}) => {
    loading.value = true

    try {
      const response = await axios.get(`${baseUrl}/${endpoint}`, { params })
      data.value = response.data;
      console.log('data list item get api', data.value);
    } catch (err) {
      error.value = err
    } finally { 
      loading.value = false
    }
  }


  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    fetchData
  }
}

export default useApi;