import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "@/router/router.js";
const pinia = createPinia();

import '@/assets/extra-libs/datatables.net-bs4/css/dataTables.bootstrap4.css';
import '@/assets/dist/css/style.min.css';


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

console.log("router:::::::"+ router.options.routes);
