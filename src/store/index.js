import { defineStore } from 'pinia'

export const useUser = defineStore('users', {
  state: () => ({ 
    userLoged: JSON.parse(localStorage.getItem('user')) || false
  }),
  actions: {
    logOut(){
      localStorage.clear
      console.log('clear');
    }
  }
})
