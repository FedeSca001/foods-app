<template>
  <h3>{{foodsList[$route.params.id-1].name}}</h3>
  <h4>Select your favourite food</h4>
  <div class="containFlex">
    <v-col v-for="item in foodsList[$route.params.id-1].foods" :key="item.id"
      cols="4">
      <v-card
        class="mx-auto my-12"
        max-width="374">
        <v-img
          height="250"
          :src="item.productimg"
          cover
        ></v-img>

        <v-card-header>
          <v-card-header-text>
            <v-card-title>{{item.foodname}}</v-card-title>

            <v-card-subtitle>
              <span class="mr-1">{{item.productcategory}}</span>
            </v-card-subtitle>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <div>
            {{item.desciption}}
          </div>
          <div class="my-4 text-subtitle-1">
            •• $ {{item.price}}  ••
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <v-btn
            variant="outlined"
            color="success"
            text
            @click="items.addToCart(item)">
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script setup>
  import {useProducts} from '../../store/products'

  const items = useProducts()
  const foodsList = items.restorants

</script>

<style>
.containFlex{
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
    justify-items: center;
}
</style>