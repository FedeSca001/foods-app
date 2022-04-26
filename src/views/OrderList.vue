<template>
    <div class="containFlex">
    <v-btn
      class="ordersButt"
      variant="outlined"
      color="error"
      @click="cleanOrder()">Cleaner
    </v-btn>
    <v-col v-for="item in orderList" :key="item.id"
      cols="4">
      <div v-for="card in item" :key="card.id">
        <p>{{card[0].foodname}}</p>
        <p>{{card[0].price}}</p>
      </div>
    </v-col>
  </div>
</template>

<script setup>
    import axios from 'axios';
    let orderList = []
    const url = 'https://62630e3ac430dc560d2b8a72.mockapi.io/orderlist/1'

    async function getOrder (){
    const send = await axios.get(url)
    orderList = send.data.object
    console.log(orderList);
    }

    async function cleanOrder (){
      const clean = await axios.delete(url, $mockData)
      let orderList = []
      return { orderList, clean }
    }
    getOrder()
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