import Vue from 'vue';
import router from './router.js';
import store from './store.js';
import App from './App.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

new Vue({
    el: '#dw',
    router,
    store,
    components: {
        App
    },
    computed: {
        ...mapGetters(['isAuth'])
    },     
});