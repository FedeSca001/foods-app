<template>
  <v-main>
    <p v-for="resto in restorant" :key="resto.id">{{resto.name}}</p>
  </v-main>
</template>

<script setup>
import {useProducts} from '../../store/products'

  let url = 'https://623b1a4c46a692bd844e72cc.mockapi.io/api/food/vuejs/restorant'
  async function getData(){
     const r = await fetch(url)
     let restorant = await r.json()
     useProducts().restorants = restorant
  }
  getData()
  
  return {
    restorant
  }
</script>

<style>

</style>