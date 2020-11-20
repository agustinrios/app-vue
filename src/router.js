import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'agencias',
            component: () => import("./views/Agencias.vue")
        },
        {
            path: '/servicios',
            name: 'servicios',
            component: () => import("./views/Servicios.vue")
        },
        {
            path: '/vehiculos',
            name: 'vehiculos',
            component: () => import("./views/Vehiculos.vue")
        },
    ]
})