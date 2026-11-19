import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { createApp } from 'vue'
import App from './App.vue'

/*
	-Every Vue application starts by creating a new application instance with the  createApp function
	- We then pass the App component into the createApp method.
	- The App component is a "root/parent"
*/

createApp(App).mount('#app')
