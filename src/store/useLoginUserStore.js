import {defineStore} from 'pinia'

export const useLoginUserStore = defineStore('loginUser', {
    state: ()=>{
        loginUser: null
    },
    getters: {
        getLoginUser: (state) => {
            return '6666'
        }
    },
    actions: {}
})

