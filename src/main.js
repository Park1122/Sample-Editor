import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state:{
    detail: ''
  },
  mutations: {
    saveContent(state, content) {
      state.detail = content;
      console.log('state.detail: ', state.detail);
    }
  }
})

const routes = [
  { path: '/edit', component: () => import('./components/ToastEditor.vue') },
  { path: '/view', component: () => import('./components/ToastViewer.vue') }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
