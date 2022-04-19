<template>
  <v-app>
    <section v-if="loged">
      <NavBar/>
      <v-main>
        <router-view/>
      </v-main>
    </section>
    <section v-else>
      <LogIn/>
    </section> 
  </v-app>
</template>

<script>

import {useUser} from './store/index'
import LogIn from "./components/LogIn/LogIn.vue"
import NavBar from './components/NavBar/NavBar.vue'

export default {
  components: {
    LogIn,
    NavBar
},
  setup(){
    const loged = useUser().userLoged
    return{ loged }
  }
}
</script>

<style scoped>
.imgLogo{
  margin: 0 auto;
  width: 40vw;
}
</style>