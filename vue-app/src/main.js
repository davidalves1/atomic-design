import Vue from 'vue';
import router from './router';

import MainTemplate from './templates/MainTemplate.vue';

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(MainTemplate),
}).$mount('#app');
