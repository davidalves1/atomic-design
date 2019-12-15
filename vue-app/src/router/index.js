import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: () => import(/* webpackChunkName: "kanban" */ '../pages/Kanban.vue'),
  },
  {
    path: '/atomic',
    name: 'atomic',
    component: () => import(/* webpackChunkName: "atomic" */ '../pages/Atomic.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
