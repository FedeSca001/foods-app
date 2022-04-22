<template>
<section>
  <SelectSection v-if="administrator.name === client.name"/>
  <ProductList/>
</section>
</template>

<script setup>
import ProductList from '../components/ProductList/ProductList.vue'
import SelectSection from '../components/SelectSection/SelectSection.vue'
import { useUser } from '../store'


let use = useUser()
let client = use.userLoged
let administrator = use.adminAccess
</script>

<style>

</style>