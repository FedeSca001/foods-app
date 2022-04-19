<template>
  <v-btn @click="delette.deletteCart()">borrar cart</v-btn>
  <ProductList/>
</template>

<script setup>
import ProductList from '../components/ProductList/ProductList.vue'
import { useProducts } from '../store/products'
const delette = useProducts()
</script>

<style>

</style>