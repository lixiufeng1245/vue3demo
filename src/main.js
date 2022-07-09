/*
 * @Author: leo
 * @FilePath: \yxj\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast, Dialog, Icon } from 'vant';
import 'vant/lib/index.css';
import "amfe-flexible";
import preventReclick from "@/tools/preventReclick";

const app=createApp(App);


  app.use(store)
    .use(router)
    .use(preventReclick)
    .use(Toast)
    .use(Dialog)
    .use(Icon)
    .mount("#app");
console.log(app.config);
app.config.globalProperties.$http = () => {
  return {selt:[1,2,3,4,5]}
};

