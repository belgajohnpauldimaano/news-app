import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import store from './store/index'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('span');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
