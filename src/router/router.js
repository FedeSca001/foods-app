import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/signup',
        component: ()=> import('../components/SignUp/SignUp.vue')
    },
    {
        path: '/login',
        component: ()=> import('../components/LogIn/LogIn.vue')
    },
    {
        path: '/restorantfoods/:id',
        component: ()=> import('../components/RestorantFoods/RestorantFoods.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router