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
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

addIcons(BiGithub, BiWhatsapp, BiMailbox, BiLinkedin, CoPhp, FaJsSquare, CoJquery, 
            CoMysql, CoLaravel, CoArrowCircleRight, BiFiletypeHtml, BiFiletypeCss, CoLinux, 
            CoReact, CoVisualStudioCode, CoPostman, CoStripeS, BiGoogle, MdPayment, CoTwilio, FaSms,
            IoHardwareChipSharp 
);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);
app.use(VueScrollTo)

const options = {
    customClass: {
        container: 'my-swal'
    },
    confirmButtonColor: '#FB2576',
    allowOutsideClick: false,
    background: '#fff',
    backdrop: `
      rgba(0,0,0,0.8)
    `
}

app.use(VueSweetalert2, options)
window.Swal =  app.config.globalProperties.$swal;

app.mount('#app')
