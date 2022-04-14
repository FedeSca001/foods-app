<template>
  <section v-if="loged">
    <NavBar/>
    <ProductList/>
  </section>
  <section v-else>
    <LogIn/>
  </section>
</template>

<script>
import ProductList from "../components/ProductList/ProductList.vue"
import LogIn from "../components/LogIn/LogIn.vue"
import NavBar from "../components/NavBar/NavBar.vue"
import {useUser} from '../store/index'

export default {
  components: {
    ProductList,
    NavBar,
    LogIn
},
  setup(){
    const loged = useUser().userLoged
    return{
      loged
    }
  }
}
</script>

<style>

</style>