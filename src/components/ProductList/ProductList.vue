<template>
  <v-main>
    <h3>
      Welcome to {{useProducts().restorants.length}} restorant
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
              color="green">
                Go to restorant</v-btn>
          </v-card-actions>
          <v-card-text v-for="food in resto.foods" :key="food.id" >
            {{food.foodname}}
          </v-card-text>
        </v-card>
        </v-col>
      </div>
  </v-main>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useProducts} from '../../store/products'
  export default {
    setup(){
      const data = useProducts()
      const {restorants, getData} = data
      return { restorants, getData }
    }
  }
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