import { defineStore } from 'pinia'

export const useUser = defineStore('users', {
  state: () => ({ 
    userLoged: JSON.parse(localStorage.getItem('user')) || false,
    userData: {
      name: '',
      phone: '',
      mail: '',
      adress: ''
    }
  }),
  actions: {
    logIn(){
      localStorage.setItem('user', JSON.stringify(this.userData))
      location.reload()
    },
    reset(){
      this.userData.name = "";
      this.userData.phone = "";
      this.userData.mail = "";
      this.userData.adress = "";
    },
    logOut(){
      localStorage.setItem('user', JSON.stringify({}))
      location.reload()
    }
  }
})
