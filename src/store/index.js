import { defineStore } from 'pinia'
import firebase from "firebase/compat/app"


export const useUser = defineStore('users', {
  state: () => ({ 
    userLoged: JSON.parse(localStorage.getItem('user')) || false,
    userData: {
      name: '',
      phone: '',
      mail: '',
      pass: '',
      adress: ''
    }
  }),
  actions: {
    logIn(){
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userData.mail, this.userData.pass)
        .then((data) => {
          router.push('/')
        })
        .catch(error => {
          console.log(error.code)
          alert(error.message);
        });
      localStorage.setItem('user', JSON.stringify(this.userData))
      location.reload()
    },
    reset(){
      this.userData.name = "";
      this.userData.phone = "";
      this.userData.mail = "";
      this.userData.adress = "";
      this.userData.pass = "";
    },
    logOut(){
      localStorage.clear()
      location.reload()
    },
  }
})
