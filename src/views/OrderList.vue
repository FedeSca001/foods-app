<template>
    <div class="containFlex">
    <v-btn
      class="ordersButt"
      variant="outlined"
      color="error"
      @click="cleanOrder()">Cleaner
    </v-btn>
    <v-col v-for="item in list" :key="item.id"
      cols="4">
      <p>{{item.foodname}}</p>
    </v-col>
  </div>
</template>

<script setup>
  import { useProducts } from '../store/products'

  const order = useProducts()
  const list = order.orderList
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