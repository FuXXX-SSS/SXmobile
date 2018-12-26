// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Tab,
  Tabs,Tabbar, TabbarItem,
  Swipe,
  SwipeItem,
  Search,
  SwitchCell,
  Row,
  Col,
  Icon,
  Rate,
  Button,
  Area,
  Picker,
  TreeSelect,
  Loading,
  Collapse,
  CollapseItem,
  NavBar,
  DatetimePicker,
  Popup,
  Waterfall,
  Cell,
  CellGroup,
  Dialog,
  Field,
  Stepper,
  RadioGroup,
  Radio,
  List,
  Checkbox,
  CheckboxGroup,
  Toast,
  Lazyload,
  NumberKeyboard,
  Actionsheet,
  Pagination ,
} from 'vant';
import App from './App'
import router from './router'
import Http from './http'
import store from './vuex'
import 'babel-polyfill'
import VueDND from 'awe-dnd'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Search);
Vue.use(SwitchCell);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(Rate);
Vue.use(Button);
Vue.use(Picker);
Vue.use(TreeSelect);
Vue.use(Rate);
Vue.use(Area);
Vue.use(Loading);
Vue.use(Collapse).use(CollapseItem);
Vue.use(NavBar);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Waterfall);
Vue.use(Cell).use(CellGroup);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(Stepper);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(List);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(NumberKeyboard);
Vue.use(Lazyload);
Vue.use(Actionsheet);
Vue.use(VueDND)
Vue.use(VueWechatTitle)
Vue.use(Pagination)

const baseUrl = "https://www.3xgc.com"
Vue.prototype.$url = baseUrl;
Vue.prototype.$http = Http;
Vue.config.productionTip = false

// 是否app
const isApp = true;


// 是否小程序
const isWX = false;
/**
 * app : 1
 * 小程序 : 2
 * web : 3
 */
Vue.prototype.$proType = isApp ? 1 : isWX ? 2 : 3;

// 过滤金钱
Vue.filter("cny", (value, sign = "¥", num = 2) => isNaN(value * 1) ? value : `${sign} ${(value * 1).toFixed(num)}`)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
