<template>
  <div class="containFlex">
    <v-col v-for="item, i in cart.cartList" :key="item.id"
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
            •• $ {{item.price*item.cant}}  ••
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>
        <v-card-text>
          <div>
            <v-btn @click="()=>{if(item.cant<100){item.cant++}}">+</v-btn>
            Cant: {{item.cant}}
            <v-btn @click="()=>{if(item.cant>1){item.cant--}}">-</v-btn>
          </div>
        </v-card-text>
        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
          <v-btn color="error" text @click="cart.deletItem(i)">X Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
  <v-btn @click="cart.deletteCart()">delette cart</v-btn>
  <v-btn to="/checkout" :disabled="!cart.cartList.length">Comfirm cart</v-btn>
</template>

<script setup>
  import { useProducts } from '../../store/products'

  const cart = useProducts()
  let disab = true

</script>

<style scoped>
.containFlex{
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
    justify-items: center;
}
</style>