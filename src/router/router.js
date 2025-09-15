import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/login',
        name: 'login',
        component: import('@/views/Login.vue')
    },{
        path: '/register',
        name: 'register',
        component: import('@/views/register.vue')
    },{
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: import('@/views/forgotPassword.vue')
    },{
        path: '/main',
        name: 'main',
        meta:{
            requiresAuth: true
        },
        component: ()=> import('@/views/Main.vue')
    },{
        path: '/',
        name: 'index',
        redirect: '/main',
        meta:{
            requiresAuth: true
        }
    }]
    
});
router.beforeEach((to, from, next) => {
    
    if (to.meta.requiresAuth) {
        
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
