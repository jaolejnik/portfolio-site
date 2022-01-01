import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Buefy from "buefy";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { utils } from "@/utils";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy);

Vue.config.productionTip = false;

Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
