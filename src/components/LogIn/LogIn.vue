<template>
  <v-form
    class="formContain"
    ref="form"
    lazy-validation>
    <h1>Log In</h1>

  <v-row>
    <v-col
      cols="12"
      md="8">
      <v-text-field
        v-model="user.userData.name"
        label="Name"
        required
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="4">
      <v-text-field
        v-model="user.userData.phone"
        label="Phone number"
        required
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col
      cols="12"
      md="8">
      <v-text-field
        v-model="user.userData.mail"
        label="E-mail"
        required
      ></v-text-field></v-col>
    <v-col
      cols="12"
      md="4">
      <v-text-field
        v-model="user.userData.pass"
        label="Password"
        required
        type="password"
      ></v-text-field>
    </v-col>
  </v-row>
      <v-text-field
        v-model="user.userData.adress"
        label="Adress"
        required
      ></v-text-field>
        <v-btn
          color="success"
          class="mr-4"
          @click="user.logIn">
          Log in
        </v-btn>
      <v-btn
        color="error"
        class="mr-4"
        @click="user.reset">
        Reset
      </v-btn>
      <v-btn
        class="mr-4"
        @click="setLogAdmin()">
        Admin
      </v-btn>

  </v-form>
</template>

<script setup>
  import { useUser } from '../../store'


  let admin = false
  function setLogAdmin(){
    admin = !admin
    console.log(admin)
  }
  let user = useUser()
</script>

<style scoped>
.formContain{
  width: 60%;
  margin: 10vw auto;
}
</style>