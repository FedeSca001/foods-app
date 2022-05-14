<template>
<section>
  <SelectSection />
  <ProductList/>
</section>
</template>

<script setup>
import ProductList from '../components/ProductList/ProductList.vue'
import SelectSection from '../components/SelectSection/SelectSection.vue'
import { useUser } from '../store/index'


let use = useUser()
let client = use.userLoged
</script>

<style>

</style>