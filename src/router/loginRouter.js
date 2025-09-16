const loginRouter = [{
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
    path: '/',
    name: 'index',
    redirect: '/main',
    meta:{
        requiresAuth: true
    }
}];

export default loginRouter;