import Vue from 'vue'
import App from './App.vue'
import store from './store'


import resize from 'vue-element-resize-detector'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueResizable from 'vue-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

 Vue.use(resize)

Vue.use(VueResizable)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
