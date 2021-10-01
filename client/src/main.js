import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ethers } from "ethers";

Vue.use(ethers);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
