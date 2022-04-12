import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: () => import('../views/LogIn/LogIn.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router