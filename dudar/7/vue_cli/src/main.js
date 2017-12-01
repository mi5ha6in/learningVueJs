import Vue from 'vue'
import App from './App.vue'
import example from './example.vue'

Vue.component ('app-example', example)

new Vue({
  el: '#app',
  render: h => h(App)
})
