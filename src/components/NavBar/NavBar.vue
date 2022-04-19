<template>
    <v-app-bar class="navContain">
        <v-btn
            class="btnNav"
            variant="outlined"
            color="success"
            to="/">Home
        </v-btn>

        <v-btn
            class="btnNav"
            variant="outlined"
            color="warning"
            to="/cartlist">
                Cart list -/
                <div>{{cart.cartList.length}}-</div>
        </v-btn>

        <router-link to="/login">
            <v-btn
                class="btnNav"
                variant="outlined"
                color="error"
                @click="user.logOut()">Log out</v-btn>
        </router-link>
    </v-app-bar>
</template>

<script setup>
    import { useUser } from '../../store/index'
    import { useProducts } from '../../store/products'

    const cart = useProducts()
    const user = useUser()
    

</script>

<style scoped>
.btnNav{
    margin: 1vw;
}
.navContain{
    background-color: aliceblue;
}
</style>