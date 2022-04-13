<template>
  <v-app>
    <v-main>
      <router-link to="/login">Log in</router-link>
      <router-link to="/">Home</router-link>
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
    //
    })
}
</script>
