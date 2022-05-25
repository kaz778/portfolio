import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faTwitter, faInstagram)

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
