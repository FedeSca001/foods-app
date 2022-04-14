import { defineStore } from 'pinia'

export const useProducts = defineStore('productsApi',{
    state: ()=>({
        restorants: [],
        url: 'https://623b1a4c46a692bd844e72cc.mockapi.io/api/food/vuejs/restorant'
    }),
    actions:{
        getData: async ()=>{ 
            const r = await fetch(state.url)
            let restorant = await r.json()
            state.restorants = restorant
            console.log(state.restorants)
        }
    }  
})