import './assets/main.scss'
import './assets/_mixins.scss'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from '../locales/i18n'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Privacy from './views/Privacy.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/privacy', component: Privacy }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')