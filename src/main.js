import { createApp } from 'vue'
import MusicApp from "./components/MusicApp.vue"
import App from './App.vue'

const app = createApp(App);
app.component('MusicApp', MusicApp)

createApp(App).mount('#app')