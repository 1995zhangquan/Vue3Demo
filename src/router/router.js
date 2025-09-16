import {createRouter, createWebHistory} from "vue-router"
import loginRouter from "@/router/loginRouter.js";
import siderRouter from "@/router/siderRouter.js";

const routes = [
    ...loginRouter,
    ...siderRouter,
    {
        path: '/:pathMath(.*)*',
        name: '404',
        component: () => import('@/views/404.vue')
        
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
    
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
