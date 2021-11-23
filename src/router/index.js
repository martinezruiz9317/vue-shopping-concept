import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../custom.css';
import Shop from "../views/Shop.vue";
// import Cart from "../views/Cart.vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
    import(/* webpackChunkName: "Cart" */ "../views/Cart.vue")
  },
  {
    path: "/pay",
    name: "Pay",
    component: () =>
    import(/* webpackChunkName: "Pay" */ "../views/Pay.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
    import(/* webpackChunkName: "Account" */ "../views/Account.vue")
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () =>
    import(/* webpackChunkName: "Wishlist" */ "../views/Wishlist.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
    import(/* webpackChunkName: "Support" */ "../views/Support.vue")
  },
  {
    path: "/product/:slug",
    name: "ProductDetails",
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "ProductDetails" */ "../views/ProductDetails.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
