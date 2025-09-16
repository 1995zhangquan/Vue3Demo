const siderRouter = [{
    path: '/main',
    name: 'main',
    meta:{
        requiresAuth: true
    },
    component: ()=> import('@/views/Main.vue'),
    children: [{
        path: 'orderList', //如果加了/，相当于是绝对路径访问，不加/，则需要main/xxx访问
        name: 'OrderList',
        component: ()=> import('@/components/order/OrderList.vue')
    },{
        path: 'userList',
        name:'UserList',
        component: ()=> import('@/components/user/UserList.vue')
    }]
}];
export default siderRouter;