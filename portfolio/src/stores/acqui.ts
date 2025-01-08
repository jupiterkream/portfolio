import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAcquiStore = defineStore('acqui', () => {
  const credits = ref(0)

  return {
    credits
  }
})
