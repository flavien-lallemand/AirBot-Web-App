import Vue from 'vue'
import App from './App.vue'



//Importing font awesome free icons
import { library } from '@fortawesome/fontawesome-svg-core'

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPaperPlane)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
