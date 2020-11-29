import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate"

import { required, max, email, numeric, regex } from "vee-validate/dist/rules"
import ja from 'vee-validate/dist/locale/ja.json'
extend("required", required)
extend("email", email)
extend("max", max)
extend("numeric", numeric)
extend("regex", regex)

// 一括でrulesをextend
import * as rules from 'vee-validate/dist/rules';
for (let rule in rules) {
  extend(rule, rules[rule]);
}
// メッセージを設定
localize('ja', ja);

Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  //VeeValidate,
  render: h => h(App)
}).$mount('#app')
