import { defineStore } from 'pinia'

export const useUser = defineStore('counter', {
  state: () => ({ 
    userLoged: JSON.parse(localStorage.getItem('user')) || false
  }),
  actions: {
    logUser() {
      
    },
  },
})
