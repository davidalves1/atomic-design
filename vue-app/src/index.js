import Vue from 'vue'
import MainTemplate from './templates/MainTemplate';

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css';

new Vue({
  el: '#app',
  render: h => h(MainTemplate)
})
