import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: ()=> import('../components/LogIn/LogIn.vue')
    },
    {
        path: '/restorantfoods/:id',
        name: 'restorantfoods',
        component: ()=> import('../components/RestorantFoods/RestorantFoods.vue')
    },
    {
        path: '/cartlist',
        component: ()=> import ('../components/CartList/CartList.vue')
    },
    {
        path: '/checkout',
        component: ()=> import('../components/CheckOut/CheckOut.vue')
    },
    {
        path: '/orderlist',
        component: ()=> import('../views/OrderList.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router