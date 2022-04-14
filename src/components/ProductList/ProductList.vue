<template>
  <v-main>
    <h3>
      {{userData.name}} Welcome to {{useProducts().restorants.length}} restorant
    </h3>
    <div class="containFlex">
      <v-col v-for="resto in useProducts().restorants" :key="resto.id"
        cols="4"
        class="column">
        <v-card
          class="mx-auto">
          <v-img
            :src="resto.avatar"
            height="250px"
            cover
          ></v-img>
          <v-card-title>
            {{resto.name}}
          </v-card-title>

          <v-card-subtitle>
            {{resto.descp}}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text">
              Foods list
            </v-btn>
          </v-card-actions>
          <v-card-text v-for="food in resto.foods" :key="food.id" >
            {{food.foodname}}
          </v-card-text>
        </v-card>
        </v-col>
      </div>
  </v-main>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import {useProducts} from '../../store/products'
import {useUser} from '../../store/index'
  let userData = ref(useUser().userLoged)
  let url = 'https://623b1a4c46a692bd844e72cc.mockapi.io/api/food/vuejs/restorant'
  const show = ref(false)
  async function getData(){
    const r = await fetch(url)
    let restorant = await r.json()
    useProducts().restorants = restorant
  }
  getData()
</script>

<style scoped>
.column{
    margin: 0 auto;
    min-height: 20vw;
}
.containFlex{
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
    justify-items: center;
}
</style>