import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSelectValueStore = defineStore('selectedValue', {
  state: () => {
  const radio1 = ref('')
  const radio2 = ref('')
  const radio3 = ref('')
  const radio4 = ref('')
  const radio5 = ref('')
  const radio6 = ref('')
  const radio7 = ref('')
  const radio8 = ref('')
  const radio9 = ref('')
  const radio10 = ref('')
  const radio11 = ref('')
  const radio12 = ref('')


  return {
    radio1,
    radio2,
    radio3,
    radio4,
    radio5,
    radio6,
    radio7,
    radio8,
    radio9,
    radio10,
    radio11,
    radio12 }
  }
})


