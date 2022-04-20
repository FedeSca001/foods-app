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
      <v-text-field
        v-model="user.userData.mail"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.userData.adress"
        label="Adress"
        required
      ></v-text-field>
        <v-btn
          :disabled="!valid"
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

  </v-form>
</template>

<script setup>
  import { useUser } from '../../store';
  import { ref } from 'vue'
  //import firebase from 'firebase'
  import { useRouter } from 'vue-router'
  
  let user = useUser()
  const valid = true
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value) 
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/feed')
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<style>
.formContain{
  width: 60%;
  margin: 10vw auto;
}

</style>