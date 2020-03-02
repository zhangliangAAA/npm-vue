import Vue from 'vue'
import App from './App.vue'
import ZlhSwitch from "./packages/switch";
import ZlhList from "./packages/list";

Vue.use(ZlhSwitch)
Vue.use(ZlhList)
new Vue({
  el: '#app',
  render: h => h(App)
})
