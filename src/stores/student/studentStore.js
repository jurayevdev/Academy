import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const studentStore = defineStore('student', () => {
  const state = reactive({ list: [], load: true, errorMessage: '' })

  const ADD = (data) => {
    state.list.push(data)
  }

  const LIST = computed(() => state.list)

  return { LIST, ADD }
})
