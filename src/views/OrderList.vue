<template>
    <div class="containFlex">
    <div v-for="item in list" :key="item.id">
      <img :src="item.productimg" class="imgOrder"/>
      <p>{{item.foodname}}</p>
      <p>$ {{item.price}}</p>
    </div>
  </div>
</template>

<script setup>
  import { useProducts } from '../store/products'

  const order = useProducts()
  const list = order.orderList
</script>

<style scoped>
.containFlex{
    display: flex;
    flex-wrap: wrap;
    padding: 2vw;
    margin: 0;
    justify-items: center;
    gap: 3vw;
}
.imgOrder{
  width: 20vw;
}
</style>