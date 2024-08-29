/* eslint-disable no-unused-vars */
import {
  createRouter,
  createWebHistory,
  // createWebHashHistory
} from 'vue-router';

import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import NotFoundPage from './pages/notFound.vue';
import ItemPage from './pages/_itemAlias.vue';

const routerHistory = createWebHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/:itemAlias', name: 'card', component: ItemPage },
    // { path: '/itemAlias', name: 'card', component: ItemPage },
    // { path: '/:CatchAll(.*)', name: '404', component: NotFoundPage },
    // { path: '/:pathMatch(.*)*', redirect: '/404', name: '404', component: NotFoundPage },
    { path: '/404', name: '404', component: NotFoundPage }

  ],
});

export default routers;
