import { createApp } from 'vue';
import App from './App.vue';
import DateTime from './components/DateTime.vue';
const app = createApp(App);

app.component('date-time',DateTime);

app.mount('#app');
