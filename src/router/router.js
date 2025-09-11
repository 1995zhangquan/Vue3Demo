import {createRouter, createWebHistory} from "vue-router"
import {useLoginUserStore} from '@/store/useLoginUserStore.js'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/login',
        name: 'login',
        component: import('@/views/Login.vue')
    },{
        path: '/mainHtmlBody',
        name: 'MainHtmlBody',
        component: import('@/components/MainHtmlBody.vue')
    }]
    
});
router.beforeEach((to, from, next) => {
    const loginUserStore = useLoginUserStore();
    
    if (null != loginUserStore.getLoginUser) {
        next({ name: 'mainHtmlBody' })
    } else {
        next('login')
    }
})
export default router
