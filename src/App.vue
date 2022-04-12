<template>
  <v-app>
    <v-main>
      <ProductList/>
      <LogIn/>
      <router-link to="/login">Log in</router-link>
      <router-link to="/">Home</router-link>
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>
import ProductList from "./components/ProductList/ProductList.vue";
import LogIn from "./views/LogIn/LogIn.vue";


export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { ProductList, LogIn }
}
</script>
