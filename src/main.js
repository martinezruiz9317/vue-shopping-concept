import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter('tableCurrency', num => {
  if (!num) {
    return '0.00';
  }
  const number = (num / 1).toFixed(2).replace(',', '.');
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
