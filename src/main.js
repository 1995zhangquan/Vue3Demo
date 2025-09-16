import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "@/router/router.js";
const pinia = createPinia();

import '@/assets/extra-libs/datatables.net-bs4/css/dataTables.bootstrap4.css';
import '@/assets/dist/css/style.min.css';
import '@/assets/libs/jquery/dist/jquery.min.js';
import '@/assets/libs/popperjs/dist/popper.min.js';
import '@/assets/libs/bootstrap/dist/js/bootstrap.min.js';
import '@/assets/dist/js/app-style-switcher.js';
import '@/assets/dist/js/feather.min.js';
import '@/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js';
import '@/assets/extra-libs/sparkline/sparkline.js';
import '@/assets/dist/js/sidebarmenu.js';
import '@/assets/dist/js/custom.min.js';
import '@/assets/extra-libs/datatables.net/js/jquery.dataTables.min.js';
import '@/assets/dist/js/pages/datatable/datatable-basic.init.js';



createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')

console.log("router:::::::"+ router.options.routes);
