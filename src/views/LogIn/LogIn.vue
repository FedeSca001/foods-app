<template>
  <p>log in view</p>
  <p @click="useCounterStore.increment">{{contador}}</p>
</template>

<script setup>
    import {useCounterStore} from '../../store/index'
    const contador = useCounterStore().count
</script>

<style>

</style>