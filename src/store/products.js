import { defineStore } from 'pinia'

export const useProducts = defineStore('productsApi',{
    state: ()=>({
        restorants: [],
        url: 'https://623b1a4c46a692bd844e72cc.mockapi.io/api/food/vuejs/restorant'
    }),
    actions:{
        async getData(){
            const r = await fetch(this.url)
            this.restorants = await r.json()
        }
    }
})