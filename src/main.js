import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import VueScrollTo from 'vue-scrollto';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub, BiWhatsapp, BiMailbox, BiLinkedin } from "oh-vue-icons/icons";

addIcons(BiGithub, BiWhatsapp, BiMailbox, BiLinkedin);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);
app.use(VueScrollTo)

app.mount('#app')
