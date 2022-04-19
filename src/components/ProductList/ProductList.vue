<template>
  <v-main>
    <h3>
      Hi {{user.userLoged.name}}, welcome  to {{prods.restorants.length}} restorant
    </h3>
    <div class="containFlex">
      <v-col v-for="resto in prods.restorants" :key="resto.id"
        cols="3"
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
              color="green"
              :to="{name:'restorantfoods', params: {id:resto.id} }">
                Go to restorant</v-btn>
          </v-card-actions>
          <v-card-text v-for="food in resto.foods" :key="food.id">
            {{food.foodname}}  -- $ {{food.price}} --
          </v-card-text>
        </v-card>
        </v-col>
      </div>
  </v-main>
</template>

<script setup>
import {useProducts} from '../../store/products'
  import { useUser } from '../../store/index'
  const user = useUser()
  const prods = useProducts()
  prods.getData()
  function mostrarId (prod){
    console.log(prod)
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