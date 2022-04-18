<template>
  <v-form
    class="formContain"
    ref="form"
    v-model="valid"
    lazy-validation>
    <h1>Log In</h1>

  <v-row>
    <v-col
      cols="12"
      md="8">
      <v-text-field
        v-model="userData.name"
        label="Name"
        required
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="4">

      <v-text-field
        v-model="userData.phone"
        label="Phone number"
        required
      ></v-text-field>
    </v-col>
  </v-row>
      <v-text-field
        v-model="userData.mail"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="userData.adress"
        label="Adress"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="logIn"
        to="/">
        Log in
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset">
        Reset
      </v-btn>

      <v-btn
        color="warning"
        to="/signup">
        Sign up
      </v-btn>
  </v-form>
</template>

<script>
export default {
  setup(){
  const valid= true
  const userData= {
    name: '',
    phone: '',
    mail: '',
    adress: ''
  }
  function reset(){
      this.userData.name = "";
      this.userData.phone = "";
      this.userData.mail = "";
      this.userData.adress = "";
  }
  function logIn(){
    localStorage.setItem('user', JSON.stringify(this.userData))
    console.log(this.userData.mail);

  }
  return {
    valid, userData, reset, logIn
  }
  }
}
</script>

<style scoped>
.formContain{
  width: 60%;
  margin: 10vw auto;
}
</style>