<template>
    <div class="containFlex">
    <v-col v-for="item in orderList[0]" :key="item.id"
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


      </v-card>
    </v-col>
  </div>
</template>

<script setup>
    import axios from 'axios';
    const orderList = []

    async function getOrder (){
    const url = 'https://62630e3ac430dc560d2b8a72.mockapi.io/foods'
    const send = await axios.get(url)
    orderList.push(send.data)
    const resp = console.log(orderList)
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