import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pl";
import VueDayjs from "vue-dayjs-plugin";

import { utils } from "@/utils";

Vue.use(Buefy);

library.add(fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.tz.setDefault("Poland/Warsaw");
dayjs.locale("en");
Vue.use(VueDayjs);

Vue.config.productionTip = false;

Vue.prototype.$utils = utils;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
