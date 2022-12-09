import { createApp, configureCompat } from 'vue'
import './style.css'
import App from './App.vue'

configureCompat({
  // MODE: 3 // without this, internal runtime components are not in vue3 mode
})

createApp(App).mount('#app')
