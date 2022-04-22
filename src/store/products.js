import { defineStore } from 'pinia'

export const useProducts = defineStore('productsApi',{
    state: ()=>({
        restorants: [],
        cartList: JSON.parse(localStorage.getItem('cartList')) || [],
        cartConfirm: false,
    }),
    actions:{
        async getData(){
            const url = 'https://62630e3ac430dc560d2b8a72.mockapi.io/restorants'
            const r = await fetch(url)
            this.restorants = await r.json()
        },
        addToCart(prod){
            this.cartList.push({...prod, cant: 1})
            localStorage.setItem('cartList', JSON.stringify(this.cartList))
        },
        deletteCart(){
            this.cartList = []
            localStorage.setItem('cartList', JSON.stringify(this.cartList))
        },
        deletItem(i) {
            this.cartList.splice(i, 1);
            localStorage.setItem('cartList', JSON.stringify(this.cartList))
        },
        confirCart(){
            this.cartConfirm = true
            this.deletteCart()
        }
    }
})