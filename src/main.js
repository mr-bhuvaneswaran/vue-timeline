import Vue from 'vue'
import router from './routes'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({ el: '#app', router, render: h => h(App) })
