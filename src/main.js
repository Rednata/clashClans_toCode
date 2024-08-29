import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import routers from './routes';

const app = createApp(App);
app.use(routers);
app.mount('#app');
