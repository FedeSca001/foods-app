import { defineStore } from 'pinia'

export const useProducts = defineStore('productsApi',{
    state: ()=>({
        restorants: []
    })
})