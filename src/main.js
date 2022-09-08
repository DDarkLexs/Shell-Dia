import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueCompositionApi)

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')



