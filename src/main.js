import Vue from "vue";
import Form from "./Form.vue";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: h => h(Form)
}).$mount("#app");
