import {defineStore} from 'pinia'
import {ref} from "vue";

export const useLoginUserStore = defineStore('loginUser', {
    state: ()=>{
    },
    getters: {
        isLogin:(state) =>{
        }
    },
    actions: {
        setLoginUser(user){
        },
        clearLoginUser () {
        
        }
    }
})

