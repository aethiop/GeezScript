import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
    },
]
export default createRouter({
    history: createWebHistory(),
    routes,
})
