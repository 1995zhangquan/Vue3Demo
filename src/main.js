import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router.js";
import {createPinia} from "pinia";


import '@/assets/images/favicon.ico';
import '@/assets/css/com_css_family.css';
import '@/assets/css/bootstrap/css/bootstrap.min.css';
import '@/assets/pages/waves/css/waves.min.css';
import '@/assets/icon/themify-icons/themify-icons.css';
import '@/assets/icon/icofont/css/icofont.css';
import '@/assets/icon/font-awesome/css/font-awesome.min.css';
import '@/assets/css/style.css';


const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
