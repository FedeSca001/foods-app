<template>
    <v-app-bar class="navContain">
        <v-btn 
        class="btnNav"
        variant="outlined"
        color="success">Home</v-btn>
        <v-btn 
        class="btnNav"
        variant="outlined"
        color="warning">Cart list</v-btn>
        <v-btn 
        class="btnNav"
        variant="outlined"
        color="error"
        @click="user.logOut()">Log out</v-btn>
    </v-app-bar>
</template>

<script setup>
    import { useUser } from '../../store/index'
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