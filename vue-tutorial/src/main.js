import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import komponents from '@/components/UI'

komponents.forEach(komponent => {
    createApp(App).component(komponent.name, komponent);
})
createApp(App).use(store).use(router).mount('#app')
