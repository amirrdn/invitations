import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store";
import axios from "axios";
import { $, jQuery } from "jquery";
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ConfirmationService from 'primevue/confirmationservice';
import AudioVisual from 'vue-audio-visual'

window.$ = window.jQuery = require("jquery");

import "../src/assets/adm/css/bootstrap.min.css?ver=1.1.0"
import "../src/assets/adm/css/font-awesome/css/all.min.css?ver=1.1.0"
import "../src/assets/adm/css/aos.css?ver=1.1.0"
import "../src/assets/adm/css/ekko-lightbox.css?ver=1.1.0"
import "../src/assets/adm/css/main.css?ver=1.1.0"
import "../src/assets/adm/scripts/jquery.min.js?ver=1.1.0"
import "../src/assets/adm/scripts/bootstrap.bundle.min.js?ver=1.1.0"

import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "../src/assets/adm/scripts/aos.js?ver=1.1.0"
import "../src/assets/adm/scripts/ekko-lightbox.min.js?ver=1.1.0"
//import "../src/assets/adm/scripts/main.js?ver=1.1.0"
import "../src/assets/mobile.css"

//createApp(App).use(store).use(PrimeVue).use(AudioVisual).use(router).mount('#app')
const app = createApp(App);
app.config.globalProperties.$store = store;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$server = "http://back-end.e-procurement.abdi.co.id:8080/";
app.config.globalProperties.$api_url = "http://back-end.e-procurement.abdi.co.id/api/";

//app.config.globalProperties.$server = "http://localhost:8080/";
//app.config.globalProperties.$api_url = "http://localhost:8080/api/";

app.config.globalProperties.$filters = {
    live_numbers_preview (value) {
        console.log(value)
        if(value.toString().length <= 1)
        {
            return "0"+value.toString();
        }
        return value.toString();
    }
}

app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);
app.use(AudioVisual);
app.use(router);
app.component("InputText", InputText);
app.component("Button", Button);
router.isReady().then(() => app.mount("#app"));