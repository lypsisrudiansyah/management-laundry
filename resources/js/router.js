//IMPORT SECTION
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import store from './store.js'

Vue.use(Router)


//DEFINE ROUTE
const router = new Router({
    mode: "history",
    // history: true,
    // hashbang: false,
    // linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});


//Navigation Guards
router.beforeEach((to, from, next) => {
    store.commit('CLEAR_ERRORS')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        if (!auth) {
            next({name: 'login'})
        } else {
            next()
        }
    } else {
        next()
    }
})


export default router