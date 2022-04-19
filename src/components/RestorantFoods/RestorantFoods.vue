<template>
  <p>product of restorant {{$route.params.id-1}}</p>
</template>

<script setup>
  import {useProducts} from '../../store/products'

  const items = useProducts()

  const foodsList = items.restorants
  console.log(foodsList);
</script>

<style>

</style>