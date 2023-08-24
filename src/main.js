import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import VueScrollTo from 'vue-scrollto';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub, BiWhatsapp, BiMailbox, BiLinkedin, CoPhp, FaJsSquare, CoJquery, CoMysql, CoLaravel, 
            CoArrowCircleRight, BiFiletypeHtml, BiFiletypeCss, CoLinux, CoReact, CoVisualStudioCode, CoPostman,
            CoStripeS, BiGoogle, MdPayment, CoTwilio, FaSms, IoHardwareChipSharp 
        } from "oh-vue-icons/icons";

addIcons(BiGithub, BiWhatsapp, BiMailbox, BiLinkedin, CoPhp, FaJsSquare, CoJquery, 
            CoMysql, CoLaravel, CoArrowCircleRight, BiFiletypeHtml, BiFiletypeCss, CoLinux, 
            CoReact, CoVisualStudioCode, CoPostman, CoStripeS, BiGoogle, MdPayment, CoTwilio, FaSms,
            IoHardwareChipSharp 
);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);
app.use(VueScrollTo)

app.mount('#app')
