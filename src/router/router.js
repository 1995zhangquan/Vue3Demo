import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/login',
        name: 'login',
        component: import('@/views/Login.vue')
    },{
        path: '/index',
        name: 'index',
        meta:{
            requiresAuth: true
        },
        component: import('@/components/index.vue')
    },{
        path: '/',
        name: 'index',
        redirect: '/index',
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
