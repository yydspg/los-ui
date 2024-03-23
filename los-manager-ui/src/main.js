import './assets/main.css'

import { createApp } from 'vue'
import { createPinia} from "pinia";
import App from './App.vue'
// test axios
import {getTestData} from "@/apis/test.js";


const pinia = createPinia()
// add pinia
createApp(App).use(pinia).mount('#app')

getTestData().then(res => {
    console.log(res.data)
})
