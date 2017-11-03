import Vue from 'vue';

import App from './App.vue';

import {store} from './store/index.js';

new Vue({
    store: store,
    el: '#app',
    render: h => h(App)
});