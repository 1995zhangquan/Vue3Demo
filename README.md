github提交git代理

git config http.proxy 'http://127.0.0.1:7890'
git config https.proxy 'http://127.0.0.1:7890'

## 1.v-on 修饰符

    .stop	阻止事件冒泡
    .prevent	阻止默认事件
    .once	只触发一次
    .capture	事件捕获模式

## 2.v-model修饰符

    .lazy	在 input 失去焦点或回车时才同步
    .number	将输入转为数值类型
    .trim	自动过滤首尾空白字符

## 3.ref和reactive

    ref在js种使用.value取值，在html里可以直接使用    
    reactive用于创建对象或数组，const obj = reactive({ name: 'Tom', age: 20 }),会递归地将整个对象树都变为响应式

## 4.计算属性与监听

    4.1 计算属性
        与method区别：计算属性存在缓存机制，而method每次调用每次执行，计算属性computed，方法method()调用
    
        const count = computed(() => {
            //return .....;
            get(){return ...},
            set(value){}
        })
    4.2 监听
        4.2.1 基础使用
            const count = ref(0);
            watch(cout,(newValue,oldValue) => {
                ....
            })
        4.2.2 监听多个数据
            const firstName = ref('Tom')
            const lastName = ref('Jerry')
            
            // 同时监听 firstName 和 lastName
            watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
                console.log(`名字变化了：${oldFirst} ${oldLast} => ${newFirst} ${newLast}`)
            })
        4.2.3 进阶
            4.2.3.1 watch(source, callback, options)
                options选项：
                    immediate	是否立即执行一次监听回调	false
                    deep	是否深度监听对象内部属性变化	false
                    flush	控制监听器回调的执行时机 以下为flush可选值   
                        pre	默认值，组件更新之前执行	大多数情况
                        post	组件更新之后执行	需要访问更新后的DOM时
                        sync	同步触发，数据变化立即执行	非常特殊情况
                举例：
                    // 深度监听（对象内部属性变化也会触发）
                    watch(user, () => {
                        console.log('深监听：user变化了')
                    }, { deep: true })
                副作用清理函数：用于解决上个请求还未响应，第二个请求已经发出
                    watch(id, (newId, oldId, onCleanup) => {
                        const controller = new AbortController()
                        fetch(`/api/${newId}`, { signal: controller.signal })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log('请求结果:', data)
                        })
                        onCleanup(() => {
                            controller.abort() // 取消上一个请求
                        })
                    })

            4.2.3.2 watchEffect
                watchEffect(async () => {
                    console.log(todoId.value) // ✅ 被追踪，因为在 await 之前访问
                    const response = await fetch('...')
                    console.log(someOtherRef.value) // ❌ 不被追踪，因为在 await 之后访问
                )}

                const user = ref({
                    name: 'Tom',
                    age: 20,
                    address: { city: 'Shanghai', street: 'Main St' }
                })
                
                watchEffect(() => {
                    console.log(`User city: ${user.value.address.city}`)
                })
                具体方式参考：https://blog.csdn.net/qq_44643806/article/details/147671994?spm=1001.2101.3001.10796
                使用时机（场景）：
            4.2.3.3 监听属性的常见使用场景
                数据变化请求API	表单值变化时重新获取数据
                数据变化存储数据	自动保存用户输入
                执行副作用	数据变化时更新DOM或执行动画
        4.2.4 从 Vue 3.5 版本开始，引入了新 API：onWatcherCleanup()：

            特点：
                不再需要第三个参数 onCleanup。
                可以独立地在监听器或 watchEffect() 回调函数内调用清理函数。
            使用限制：
                必须在同步阶段调用，不可放在 await 之后。
                因此，必须在异步操作之前注册。
            举例：
                正确用法（同步调用）：
                watch(id, (newId) => {
                    const controller = new AbortController()
                    onWatcherCleanup(() => controller.abort()) // 同步调用，正确！
                    fetch(`/api/${newId}`, { signal: controller.signal })
                })
                
                
                ❌ 错误用法（异步调用）：
                watch(id, async (newId) => {
                    const controller = new AbortController()
                    await someAsyncOperation()
                    onWatcherCleanup(() => controller.abort()) // ❌ 错误！异步调用
                })

## 5.父子通信

    5.1 父传子
        理解：在子组件中defineProps定义属性，父组件可以通过<childer xxx=''></childer>使用
        <!-- Parent.vue -->
        <MyCard title="Vue 面经" content="面试知识点" />
        <!-- MyCard.vue -->
        <script setup>
            const props = defineProps(['title', 'content'])
        </script>
        <template>
            <div>
                <h3>{{ props.title }}</h3>
                <p>{{ props.content }}</p>
            </div>
        </template>
        setup语法糖写法：const {title,content} = defineProps(['title', 'content'])
        也可以定义对象：const props = defineProps({title:String,content:String})
    
        const post = { ititle: 'My Journey with Vue' ，content:'面试知识点'}
        以及下面的模板：<MyCard v-bind="post" />
        而这实际上等价于：<MyCard :title="post.title" :content="post.content" />
    5.2 子传父
        初步理解：在子组件中defineEmits定义事件，父组件可以通过<child-compent @子组件定义事件名="父组件定义方法名" />

        <script setup>
            const emit = defineEmits(['submit', 'inFocus'])
            function onClick() {
              emit('submit') // 触发“submit”事件
            }
        </script>
        解释：
            defineEmits(['submit']) 表示这个组件会触发名为 'submit' 的事件；
            defineEmits接收一个字符串数组，每个字符串代表一个事件名。
            emit('submit') 就是在组件内部触发这个事件；
            父组件就可以通过 <MyForm @submit="handleSubmit" /> 来监听。
        具体理解参考地址：https://blog.csdn.net/qq_44643806/article/details/147672786?spm=1001.2101.3001.10796
        子组件暴露封装的属性和方法：
        defineExpose({
            name,method
        })

## 6.异步组件

    应用：组件不是立即加载的，而是在需要时才异步地被加载。
    <template>
        <div>
            <AsyncComponent />
        </div>
    </template>
    
    <script setup>
        import { defineAsyncComponent } from 'vue'
        const AsyncComponent = defineAsyncComponent(() =>
            import('./MyHeavyComponent.vue')
        )
        const AsyncComponent = defineAsyncComponent({
            loader: () => import('./MyHeavyComponent.vue'),
            // 加载时展示的组件
            loadingComponent: LoadingSpinner,
            
            // 出错时展示的组件
            errorComponent: ErrorMessage,
            
            // 延迟多长时间显示 loadingComponent（毫秒）
            delay: 200,
            
            // 加载超时时间（毫秒）
            timeout: 3000,
            
            // 出错时重试机制
            onError(error, retry, fail, attempts) {
                if (attempts <= 3) {
                    retry()
                } else {
                    fail()
                }
            }
        })
    </script>
    参数释义：
        loader	必填。返回组件的异步加载 Promise（即 import()）
        loadingComponent	加载过程中显示的 UI
        errorComponent	加载失败后显示的 UI
        delay	加载多少毫秒后才显示 loading
        timeout	超过此时间未加载完成视为失败
        onError	异步加载失败时自定义处理（可自动重试）

## 7.生命周期

    创建前	setup()	            Vue 3 中唯一入口                 用来声明响应式数据、props、emit、watch、计算属性等；
    挂载前	onBeforeMount()	    组件尚未挂载，DOM 还未生成         可以进行某些准备工作或日志记录,初始化数据日志；注册未依赖 DOM 的第三方逻辑
    挂载后	onMounted()	        组件已挂载，DOM 可操作            页面初始化请求,DOM 操作（如获取滚动容器、焦点）,动画执行。
    更新前	onBeforeUpdate()	响应式数据变更，但 DOM 还未更新     可用于比较新旧状态，做一些缓存或临时逻辑
    更新后	onUpdated()	        DOM 更新完毕，可做响应处理          常用于监听局部 DOM 变化后执行逻辑
    卸载前	onBeforeUnmount()	组件将被销毁，做清理前工作           做清理工作，如清除定时器、取消监听器
    卸载后	onUnmounted()	    已销毁，清理资源、解绑事件等          彻底释放资源，日志记录、事件通知等
    详细参考：https://blog.csdn.net/qq_44643806/article/details/147687614?spm=1001.2101.3001.10796

## 8.组合函数

    8.1 封装状态逻辑

        export function useToggle(initial = false) {
            const state = ref(initial)
            const toggle = () => (state.value = !state.value)
            return { state, toggle }
        }
    8.2 封装异步请求逻辑
    
        export function useFetch(url) {
            const data = ref(null)
            const error = ref(null)
            
            fetch(url)
            .then(res => res.json())
            .then(json => (data.value = json))
            .catch(err => (error.value = err))
            
            return { data, error }
        }

    8.3 封装监听器逻辑
    
        export function useMouse() {
            const x = ref(0)
            const y = ref(0)
            
            function update(e) {
            x.value = e.pageX
            y.value = e.pageY
            }
            
            onMounted(() => window.addEventListener('mousemove', update))
            onBeforeUnmount(() => window.removeEventListener('mousemove', update))
            
            return { x, y }
        }

## 9.插件

    用于：
    向应用注入功能（如添加全局方法、指令、组件等）
    对整个应用进行配置或初始化
    集成第三方库（如 Vue Router、Vuex、Pinia、Element Plus 等）
    具体参考：https://blog.csdn.net/qq_44643806/article/details/147687614?spm=1001.2101.3001.10796

## 10.路由

    10.1 基础
        import { createRouter, createWebHistory } from 'vue-router'
        const router = createRouter({
            history: createWebHistory(), //分hash模式和history模式，hash模式带#，history模式不带#
             routes: [
                {
                  path: '/',
                  name: 'home',
                  component: HomeView,
                  路由守卫：
                  beforeEnter(to,form,next){
                  },
                  children:[{ //嵌套路由
                    path: '/',              //TODO 这里不可以加/，直接跟路径，例如访问 /about/home，这里path:'home'
                    name: 'home',
                    component: HomeView,
                  },{
                    path: '/',
                    name: 'home',
                    component: HomeView,
                  },....]
                },
                
                {
                  path: '/about',
                  name: 'about',
                  // 路由懒加载：只有当访问此路由时，才会加载对应的组件
                  component: () => import('@/views/AboutView.vue')
                }]
        })
        export default router *要暴露给外界
    
        main.js里应用
            import router from './router'
            createApp(App).use(router).mount('#app')
        template里应用
            组件中必须有 <router-view>
            <template>
                <div>
                    <router-link to="/">首页</router-link>
                    <router-link to="/about">关于</router-link>
                </div>
            </template>
        组件中应用
            import { useRouter, useRoute } from 'vue-router'
            const router = useRouter() // 控制跳转
            const route = useRoute()   // 获取当前路径信息
        常用参数
            route.path        // 当前路径，例如 "/user/123"
            route.params      // 动态路径参数，例如 { id: "123" }
            route.query       // 查询参数，例如 { page: "1" }
            route.fullPath    // 完整路径，例如 "/user/123?page=1"
            route.name        // 命名路由的名字（如果配置了）
            route.meta        // 路由元信息（meta 字段）
            
          
    
    10.2 路由控制对象router
        router.push('/about')                               // 跳转到指定路径
        router.push({ name: 'user', params: { id: 123 } })  // 命名路由跳转
        router.replace('/login')                            // 替代当前页面（不留历史记录）
        router.back()                                       // 返回上一页
        router.go(-1)                                       // 前进/后退 N 步
        router.addRoute(...)                                // 动态添加路由
        // 跳转到用户详情页
        router.push(`/user/${userId}`)
        // 编程式跳转并传参数
        router.push({ path: '/search', query: { q: 'vue' } })

    10.3 动态路由（比如不同的详情页只是id不一样，可以配置动态路由）
        10.3.1 基本应用（路径不暴露参数）
            { path: '/user/:id', component: UserView }
            用下面方法取传递参数
                import { useRoute } from 'vue-router'
                const route = useRoute()
                const userId = route.params.id
        10.3.2 多参数路由（暴露参数，相当于?id=123）
            { path: '/category/:type/article/:id', component: ArticleView }
            匹配路径示例：
            /category/news/article/123
            /category/.../article/...
            访问方式：
            route.params.type   // 'news'
            route.params.id     // '123'
        10.3.3 参数支持正则
            { path: '/user/:id(\\d+)', component: UserView }
            只匹配 /user/123（数字），不匹配 /user/abc；

    10.4 路由匹配算法
        静态路径	/home	            仅 /home	        最简单直接
        动态参数	/user/:id	        /user/123	        通过 params.id 获取
        可选参数	/user/:id?	        /user 或 /user/1	参数可省略（注意需特意配置）
        通配符	/:pathMatch(.*)*	任何路径	            用于 404 页
        正则匹配	/user/:id(\\d+)	    仅数字路径 /user/1	精确匹配
    10.5 命名路由
        使用配置的name值，来进行跳转，且使用params后一定要跟name，不可以使用path
        router.push({ name: 'UserProfile', params: { id: 123 } })
        相比路径写法 router.push('/user/123')，更语义化、更安全。
        <router-link :to="{ name: 'UserProfile', params: { id: 123 } }">
            查看用户资料
        </router-link>
    10.6 命名视图
        多路由多视图
            {
                path: '/layout',
                components: {
                    default: MainContent,
                    header: HeaderBar,
                    footer: FooterBar
                }
            }
        对应模板：
            <router-view name="header" />
            <router-view />  <!-- default -->
            <router-view name="footer" />
        重定向：
            path:'/'
            redirect: '/home' 重定向 /自动跳转到/home
            redirect: {name:'home'} 重定向 /自动跳转到/home
            redirect: to => '/home' 重定向 /自动跳转到/home
        别名：
        {
            path: '/home',
            component: HomeView,
            alias: '/index'
            alias: ['index', '/tempindex']可以多个别名
        }
        传递参数：
        props:{name:'xx',age:16}

    *10.7 路由守卫
        10.7.1 应用场景：
            登录验证（如没登录 → 拦住不让进）
            权限判断（普通用户不能进后台）
            加载数据（等异步数据加载完再跳转）
            保存草稿、弹窗确认（是否离开页面）
            全局守卫的分类
            守卫名称	        执行时机	        是否需要调用 next()
            beforeEach	    跳转开始前	        ✅ 是
            beforeResolve   所有组件守卫解析后	    ✅ 是
            afterEach	    跳转结束后	     ❌ 否（只是通知）

            router.beforeEach((to, from, next) => {
                // to: 即将进入的路由
                // from: 当前离开的路由
                // next(): 控制是否放行
            })
            举例登录拦截：
            router.beforeEach((to, from, next) => {
                const isLogin = !!localStorage.getItem('token')
                
                if (to.meta.requiresAuth && !isLogin) { //次数参考10.7.5路由元信息meta
                    next('/login') // 没登录跳转登录页
                } else {
                    next() // 放行
                }
            })
            
        10.7.2 路由独享守卫，后台路由权限拦截，特定页面加载前校验数据
            const routes = [
            {
                path: '/admin',
                component: AdminView,
                beforeEnter(to, from, next) { //进入/admin时触发
                    const user = getUserInfo()
                    if (user.role === 'admin') {
                        next()
                    } else {
                        next('/403')
                    }
                }
            }]
        10.7.3 组件内守卫
                    守卫名	            触发时机	                常见用途
            beforeRouteEnter	即将进入组件前（组件还未创建）	判断是否允许进入、等数据加载完
            beforeRouteUpdate	同组件但路由参数变化时	        响应式更新组件内容
            beforeRouteLeave	离开当前组件时	                弹窗确认、保存草稿

            export default {
                beforeRouteEnter(to, from, next) {
                // 在进入该组件前执行
                console.log('准备进入这个组件')
                
                    // 如果你需要访问组件实例，可以这样写：
                    next(vm => {
                      console.log('组件实例是：', vm)
                    })
                }
            }
        10.7.4 守卫顺序
            1. 全局 beforeEach
            2. 路由 beforeEnter
           3. 组件 beforeRouteLeave（离开 a）
           4. 组件 beforeRouteEnter（进入 b）
           5. 全局 beforeResolve
           6. 页面渲染
           7. 全局 afterEach

        10.7.5 路由元信息
            {
                path: '/admin',
                component: AdminView,
                meta: {
                    requiresAuth: true, //访问 /admin 时，需要登录
                    title: '管理后台',  //页面标题
                    icon: 'admin-icon', //菜单显示图标为 admin-icon
                    cache: true     //页面可以缓存
                }
            }
            应用场景	用法示例
            登录权限控制	meta: { requiresAuth: true }
            页面标题设置	meta: { title: '首页' }
            动态菜单渲染	meta: { icon: 'home', hidden: false }
            缓存控制	    meta: { cache: true } 配合 keep-alive
            用户角色权限	meta: { roles: ['admin', 'editor'] }
            是否展示标签页	meta: { tag: true }（多标签页路由）

## 11.pinia

    11.1 应用实例：多个组件如果需要共享数据（例如登录用户信息、购物车内容、权限配置等）
        state是一个函数，可以直接使用store.xxx 访问，使用store.$reset()重置清空数据，也可以手写
        router.js:
        xxx = defindStore('xx',()=>{
            function $reset() {
            count.value = 0
        })
        使用$patch()修改数据
            对象方式（简洁）
            store.$patch({
            count: store.count + 1,
            name: 'DIO'
            })
            
            函数方式（适合复杂修改）
            store.$patch((state) => {
            state.items.push({ id: 1, name: 'shoes' })
            })
         配置 Pinia 到 Vue 应用在 main.js 或 main.ts 中引入并注册：
        // main.js
        import { createApp } from 'vue'
        import { createPinia } from 'pinia'
        import App from './App.vue'
        
        const app = createApp(App)
        const pinia = createPinia()
        
        app.use(pinia)
        app.mount('#app')
        
        创建一个 Store（状态模块）
        你可以把每个业务逻辑写在一个独立的 store 文件中，例如：
        // stores/counter.js
        import { defineStore } from 'pinia'
        
        export const useCounterStore = defineStore('【counter】', { //注意：次值唯一，命名方式 usexxxxStore
            state: () => ({
                count: 0
            }),
            getters: {
                doubleCount: (state) => state.count * 2
            },
            actions: {
                increment() {
                this.count++
            }
        })
        state: 用来定义数据
        getters: 类似于计算属性
        
        actions: 用来修改数据（支持异步）
        在组件中使用 Store
        <script setup>
            import { useCounterStore } from '@/stores/counter'
            
            const counter = useCounterStore()
            
            function addOne() {
            counter.increment()
            }
        </script>
        
        <template>
            <div>当前计数：{{ counter.count }}</div>
            <div>双倍计数：{{ counter.doubleCount }}</div>
            <button @click="addOne">+1</button>
        </template>
    11.2 关于第二个参数，可以，必须是一个函数，()=>{....}
    export const useCounterStore = defineStore('counter', () => {
        const count = ref(0)
        const doubleCount = computed(() => count.value * 2)
        function increment() {
            count.value++
        }
        return { count, doubleCount, increment } //此处必须返回
    })
    
    11.3 从store中取值，并保持响应性
        import { storeToRefs } from 'pinia'
        const store = useCounterStore()
        const { name, doubleCount } = storeToRefs(store)



