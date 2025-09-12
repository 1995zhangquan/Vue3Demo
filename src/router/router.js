import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/login',
        name: 'login',
        component: import('@/views/Login.vue')
    },{
        path: '/mainHtmlBody',
        name: 'MainHtmlBody',
        meta:{
            requiresAuth: true
        },
        component: import('@/components/MainHtmlBody.vue')
    },{
        path: '/',
        name: 'index',
        redirect: '/mainHtmlBody',
        meta:{
            requiresAuth: true
        }
    }]
    
});
router.beforeEach((to, from, next) => {
    
    if (to.meta.requiresAuth) {
        debugger
        if (null != sessionStorage.getItem('token')) {
            next();
        } else {
            next('login');
        }
    } else {
        next();
    }
})
export default router
