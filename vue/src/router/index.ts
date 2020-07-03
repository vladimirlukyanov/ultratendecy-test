import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

import Welcome from '../views/Welcome.vue'
import Portal from '../views/Portal.vue'
import Trends from '../views/Trends.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/portal',
        name: 'Portal',
        component: Portal
    },
    {
        path: '/portal/:trends',
        name: 'Trends',
        component: Trends,
        meta: { reuse: false }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
