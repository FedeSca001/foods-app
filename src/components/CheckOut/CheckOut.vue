<template>
    <h2>Check personal data</h2>
    <p>Name: {{user.userLoged.name}} - Phone number: {{user.userLoged.phone}} - E-mail: {{user.userLoged.mail}} - Adress: {{user.userLoged.adress}}</p>
    <h3>Your order list</h3>
    <div class="containFlex">
      <v-row
        class="column"
        v-for="product in cart.cartList" :key="product.id"
        cols="2">
        <v-card
            class="mx-auto column"
            max-width="400">
            <v-img
            class="white--text align-end"
            height="200px"
            width="200px"
            :src="product.productimg">
            </v-img>

            <v-card-title>{{product.foodname}}</v-card-title>

            <v-card-text class="text--primary">
            <div>Cant: {{product.cant}}</div>
            </v-card-text>
        </v-card>
      </v-row>
    </div>
    <h4>The total to pay is ${{total}}</h4>
    <v-btn @click="postOrder()">To confirm order</v-btn>
</template>

<script setup>
    import { useProducts } from '../../store/products'
    import { useUser } from '../../store/index'
    import axios from 'axios'
    import router from '../../router/router';

    let cart = useProducts()
    let total = 0
    let user = useUser()

    async function postOrder (){
        const url = 'https://62630e3ac430dc560d2b8a72.mockapi.io/orderlist/1'
        const send = await axios.post(url, cart.cartList)
        cart.deletteCart()
        location.reload();
    }
    function totalToPay(){
        cart.cartList.forEach(element => {
        total += element.cant*element.price
    });
    }
    totalToPay()

</script>

<style scoped>
.containFlex{
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
}
.column{
    padding: 1vw;
    margin: 0 auto;
}
</style>