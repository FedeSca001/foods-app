<template>
  <form class="formAdmin">
    <h2 class="titleForm">Admin access</h2>
    <v-row>
    <v-col
      cols="12"
      md="8">
      <v-text-field
        v-model="adminData.name"
        label="Name"
        required
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="4">
      <v-text-field
        v-model="adminData.password"
        label="Password"
        required
        type="password"
      ></v-text-field>
    </v-col>
    <v-btn
      color="success"
      class="mr-4"
      @click="adminAccess()">
      Log Admin
    </v-btn>
  </v-row>
  </form>
</template>

<script setup>
import { useUser } from '../../store'

  let adminData = {
    name: '',
    password: ''
  }
  let user = useUser()
  function adminAccess(){
    if (adminData.name === user.adminAccess.name && adminData.password === user.adminAccess.pass ){
      localStorage.setItem('user', JSON.stringify(user.adminAccess))
      user.userLoged = user.adminAccess
      location.reload()
    }
  }



</script>

<style scoped>
.formAdmin{
  margin: 3vw auto;
}
.titleForm{
  margin: 1vw auto;
}
</style>