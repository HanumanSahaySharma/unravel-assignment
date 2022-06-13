import { createApp } from 'vue'
import App from './App.vue';

/* Import Bootstrap */
import { Tooltip } from "bootstrap";
new Tooltip(document.body, {
  selector: "[data-bs-toggle='tooltip']",
});
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Main Style */
import '@/assets/css/style.scss';

/* Import Font Awesome 5 Free */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleInfo, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faCircleInfo, faPencil, faTrash);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
