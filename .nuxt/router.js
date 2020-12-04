import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a6a86e2a = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _5c2ceb92 = () => interopDefault(import('..\\pages\\create-password\\index.vue' /* webpackChunkName: "pages/create-password/index" */))
const _a17a2eb0 = () => interopDefault(import('..\\pages\\forget-password\\index.vue' /* webpackChunkName: "pages/forget-password/index" */))
const _22914a3a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _659b9824 = () => interopDefault(import('..\\pages\\mobile-verfication\\index.vue' /* webpackChunkName: "pages/mobile-verfication/index" */))
const _436619c2 = () => interopDefault(import('..\\pages\\my-cart\\index.vue' /* webpackChunkName: "pages/my-cart/index" */))
const _114a693b = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _53dcb25a = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _d13a3510 = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _4c1cc384 = () => interopDefault(import('..\\pages\\skeleton\\index.vue' /* webpackChunkName: "pages/skeleton/index" */))
const _782e1e44 = () => interopDefault(import('..\\pages\\timer\\index.vue' /* webpackChunkName: "pages/timer/index" */))
const _1049140d = () => interopDefault(import('..\\pages\\vendor-profile\\index.vue' /* webpackChunkName: "pages/vendor-profile/index" */))
const _d8127b88 = () => interopDefault(import('..\\pages\\partner\\doctor\\index.vue' /* webpackChunkName: "pages/partner/doctor/index" */))
const _7323a8da = () => interopDefault(import('..\\pages\\partner\\driver\\index.vue' /* webpackChunkName: "pages/partner/driver/index" */))
const _5b54f49a = () => interopDefault(import('..\\pages\\partner\\merchant\\index.vue' /* webpackChunkName: "pages/partner/merchant/index" */))
const _bd56f482 = () => interopDefault(import('..\\pages\\partner\\profession\\index.vue' /* webpackChunkName: "pages/partner/profession/index" */))
const _ada62f18 = () => interopDefault(import('..\\pages\\partner\\realestate-developer\\index.vue' /* webpackChunkName: "pages/partner/realestate-developer/index" */))
const _1e5952ea = () => interopDefault(import('..\\pages\\services\\restaurants\\index.vue' /* webpackChunkName: "pages/services/restaurants/index" */))
const _5b564fab = () => interopDefault(import('..\\pages\\vendor-profile\\my-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/my-auction/index" */))
const _58301cf0 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/index" */))
const _a6a08a4a = () => interopDefault(import('..\\pages\\vendor-profile\\reservation\\index.vue' /* webpackChunkName: "pages/vendor-profile/reservation/index" */))
const _4b0e70b2 = () => interopDefault(import('..\\pages\\vendor-profile\\subscribe-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/subscribe-auction/index" */))
const _bf001430 = () => interopDefault(import('..\\pages\\vendor-profile\\wishlist\\index.vue' /* webpackChunkName: "pages/vendor-profile/wishlist/index" */))
const _392d6169 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\order-details\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/order-details/index" */))
const _95d8ab4c = () => interopDefault(import('..\\pages\\services\\store\\vendor\\_vendorId\\index.vue' /* webpackChunkName: "pages/services/store/vendor/_vendorId/index" */))
const _09030c5f = () => interopDefault(import('..\\pages\\services\\store\\product\\_productId\\_productName\\index.vue' /* webpackChunkName: "pages/services/store/product/_productId/_productName/index" */))
const _6618e13b = () => interopDefault(import('..\\pages\\services\\restaurants\\_restaurantId\\_restaurantName\\index.vue' /* webpackChunkName: "pages/services/restaurants/_restaurantId/_restaurantName/index" */))
const _e2218914 = () => interopDefault(import('..\\pages\\services\\store\\_subCatId\\_id\\index.vue' /* webpackChunkName: "pages/services/store/_subCatId/_id/index" */))
const _575c339e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/checkout",
    component: _a6a86e2a,
    name: "checkout"
  }, {
    path: "/create-password",
    component: _5c2ceb92,
    name: "create-password"
  }, {
    path: "/forget-password",
    component: _a17a2eb0,
    name: "forget-password"
  }, {
    path: "/login",
    component: _22914a3a,
    name: "login"
  }, {
    path: "/mobile-verfication",
    component: _659b9824,
    name: "mobile-verfication"
  }, {
    path: "/my-cart",
    component: _436619c2,
    name: "my-cart"
  }, {
    path: "/partner",
    component: _114a693b,
    name: "partner"
  }, {
    path: "/services",
    component: _53dcb25a,
    name: "services"
  }, {
    path: "/sign-up",
    component: _d13a3510,
    name: "sign-up"
  }, {
    path: "/skeleton",
    component: _4c1cc384,
    name: "skeleton"
  }, {
    path: "/timer",
    component: _782e1e44,
    name: "timer"
  }, {
    path: "/vendor-profile",
    component: _1049140d,
    name: "vendor-profile"
  }, {
    path: "/partner/doctor",
    component: _d8127b88,
    name: "partner-doctor"
  }, {
    path: "/partner/driver",
    component: _7323a8da,
    name: "partner-driver"
  }, {
    path: "/partner/merchant",
    component: _5b54f49a,
    name: "partner-merchant"
  }, {
    path: "/partner/profession",
    component: _bd56f482,
    name: "partner-profession"
  }, {
    path: "/partner/realestate-developer",
    component: _ada62f18,
    name: "partner-realestate-developer"
  }, {
    path: "/services/restaurants",
    component: _1e5952ea,
    name: "services-restaurants"
  }, {
    path: "/vendor-profile/my-auction",
    component: _5b564fab,
    name: "vendor-profile-my-auction"
  }, {
    path: "/vendor-profile/orders",
    component: _58301cf0,
    name: "vendor-profile-orders"
  }, {
    path: "/vendor-profile/reservation",
    component: _a6a08a4a,
    name: "vendor-profile-reservation"
  }, {
    path: "/vendor-profile/subscribe-auction",
    component: _4b0e70b2,
    name: "vendor-profile-subscribe-auction"
  }, {
    path: "/vendor-profile/wishlist",
    component: _bf001430,
    name: "vendor-profile-wishlist"
  }, {
    path: "/vendor-profile/orders/order-details",
    component: _392d6169,
    name: "vendor-profile-orders-order-details"
  }, {
    path: "/services/store/vendor/:vendorId",
    component: _95d8ab4c,
    name: "services-store-vendor-vendorId"
  }, {
    path: "/services/store/product/:productId?/:productName",
    component: _09030c5f,
    name: "services-store-product-productId-productName"
  }, {
    path: "/services/restaurants/:restaurantId/:restaurantName",
    component: _6618e13b,
    name: "services-restaurants-restaurantId-restaurantName"
  }, {
    path: "/services/store/:subCatId?/:id",
    component: _e2218914,
    name: "services-store-subCatId-id"
  }, {
    path: "/",
    component: _575c339e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
