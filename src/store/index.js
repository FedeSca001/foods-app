import { defineStore } from 'pinia'


export const useUser = defineStore('users', {
  state: () => ({ 
    userLoged: JSON.parse(localStorage.getItem('user')) || false,
    userData: {
      name: '',
      phone: '',
      mail: '',
      pass: '',
      adress: ''
    },
    adminAccess: {
      name: 'admin2.0',
      phone: '123456789',
      mail: 'admin@admin.com',
      pass: 'admin2.0',
      adress: 'admin123'
    }
  }),
  actions: {
    logIn(){
      const validName = !'' && this.userData.name.length > 5 &&  this.userData.name.length < 12
      const validPhone = !'' && this.userData.phone.length < 12
      const validMail = !'' && this.userData.phone.length > 6 && this.userData.phone.length < 12
      const validPass = !''
      const validAdress = !''
      if (validName && validPhone && validMail && validAdress && validPass) {
        localStorage.setItem('user', JSON.stringify(this.userData))
        location.reload()
      } else {
        alert('Fill in the data correctly')
      }
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
