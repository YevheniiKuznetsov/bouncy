import Vue from 'vue'
import App from './App.vue'
import Hello from './Components/Hello.vue'
import './less/fonts.less';
import './less/style.less';

Vue.component('hello-page', Hello)

new Vue({
  el: '#app',
  render: h => h(App)
})
