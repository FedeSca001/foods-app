import { defineStore } from 'pinia'

export const useUser = defineStore('users', {
  state: () => ({ 
    userLoged: JSON.parse(localStorage.getItem('user')) || false
  })
})
