<template>
  <v-app>
    <section v-if="loged.userLoged">
      <NavBar/>
      <v-main class="main">
        <router-view/>
      </v-main>
    </section>
    <section v-else>
      <LogIn/>
    </section>
  </v-app>
</template>

<script setup>
import {useUser} from './store/index'
import LogIn from './components/LogIn/LogIn.vue'
import NavBar from './components/NavBar/NavBar.vue'

const loged = useUser()

</script>

<style scoped>
.main{
  text-align: center;
}
</style>