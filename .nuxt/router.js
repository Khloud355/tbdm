import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _571dff9c = () => interopDefault(import('..\\pages\\my-cart\\index.vue' /* webpackChunkName: "pages/my-cart/index" */))
const _25024f15 = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _39567c39 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _d8d4761a = () => interopDefault(import('..\\pages\\vendor-profile\\index.vue' /* webpackChunkName: "pages/vendor-profile/index" */))
const _9cf94ed4 = () => interopDefault(import('..\\pages\\my-cart\\checkout\\index.vue' /* webpackChunkName: "pages/my-cart/checkout/index" */))
const _7a402e16 = () => interopDefault(import('..\\pages\\partner\\doctor\\index.vue' /* webpackChunkName: "pages/partner/doctor/index" */))
const _a690d126 = () => interopDefault(import('..\\pages\\partner\\driver\\index.vue' /* webpackChunkName: "pages/partner/driver/index" */))
const _4bf3630d = () => interopDefault(import('..\\pages\\partner\\merchant\\index.vue' /* webpackChunkName: "pages/partner/merchant/index" */))
const _2af07499 = () => interopDefault(import('..\\pages\\partner\\profession\\index.vue' /* webpackChunkName: "pages/partner/profession/index" */))
const _d410e264 = () => interopDefault(import('..\\pages\\partner\\realestate-developer\\index.vue' /* webpackChunkName: "pages/partner/realestate-developer/index" */))
const _f9a21236 = () => interopDefault(import('..\\pages\\services\\restaurants\\index.vue' /* webpackChunkName: "pages/services/restaurants/index" */))
const _aa5a50de = () => interopDefault(import('..\\pages\\vendor-profile\\my-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/my-auction/index" */))
const _e5ff4724 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/index" */))
const _4cc42fb5 = () => interopDefault(import('..\\pages\\vendor-profile\\reservation\\index.vue' /* webpackChunkName: "pages/vendor-profile/reservation/index" */))
const _7a74b101 = () => interopDefault(import('..\\pages\\vendor-profile\\subscribe-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/subscribe-auction/index" */))
const _75293f4e = () => interopDefault(import('..\\pages\\vendor-profile\\wishlist\\index.vue' /* webpackChunkName: "pages/vendor-profile/wishlist/index" */))
const _3c010dc3 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\order-details\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/order-details/index" */))
const _1494ec40 = () => interopDefault(import('..\\pages\\services\\store\\vendor\\_vendorId\\index.vue' /* webpackChunkName: "pages/services/store/vendor/_vendorId/index" */))
const _3f007b76 = () => interopDefault(import('..\\pages\\services\\store\\product\\_productId\\_productName\\index.vue' /* webpackChunkName: "pages/services/store/product/_productId/_productName/index" */))
const _4066ccd6 = () => interopDefault(import('..\\pages\\services\\restaurants\\_restaurantId\\_restaurantName\\index.vue' /* webpackChunkName: "pages/services/restaurants/_restaurantId/_restaurantName/index" */))
const _73a9b350 = () => interopDefault(import('..\\pages\\services\\store\\_subCatId\\_id\\index.vue' /* webpackChunkName: "pages/services/store/_subCatId/_id/index" */))
const _3cf92317 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/my-cart",
    component: _571dff9c,
    name: "my-cart"
  }, {
    path: "/partner",
    component: _25024f15,
    name: "partner"
  }, {
    path: "/services",
    component: _39567c39,
    name: "services"
  }, {
    path: "/vendor-profile",
    component: _d8d4761a,
    name: "vendor-profile"
  }, {
    path: "/my-cart/checkout",
    component: _9cf94ed4,
    name: "my-cart-checkout"
  }, {
    path: "/partner/doctor",
    component: _7a402e16,
    name: "partner-doctor"
  }, {
    path: "/partner/driver",
    component: _a690d126,
    name: "partner-driver"
  }, {
    path: "/partner/merchant",
    component: _4bf3630d,
    name: "partner-merchant"
  }, {
    path: "/partner/profession",
    component: _2af07499,
    name: "partner-profession"
  }, {
    path: "/partner/realestate-developer",
    component: _d410e264,
    name: "partner-realestate-developer"
  }, {
    path: "/services/restaurants",
    component: _f9a21236,
    name: "services-restaurants"
  }, {
    path: "/vendor-profile/my-auction",
    component: _aa5a50de,
    name: "vendor-profile-my-auction"
  }, {
    path: "/vendor-profile/orders",
    component: _e5ff4724,
    name: "vendor-profile-orders"
  }, {
    path: "/vendor-profile/reservation",
    component: _4cc42fb5,
    name: "vendor-profile-reservation"
  }, {
    path: "/vendor-profile/subscribe-auction",
    component: _7a74b101,
    name: "vendor-profile-subscribe-auction"
  }, {
    path: "/vendor-profile/wishlist",
    component: _75293f4e,
    name: "vendor-profile-wishlist"
  }, {
    path: "/vendor-profile/orders/order-details",
    component: _3c010dc3,
    name: "vendor-profile-orders-order-details"
  }, {
    path: "/services/store/vendor/:vendorId",
    component: _1494ec40,
    name: "services-store-vendor-vendorId"
  }, {
    path: "/services/store/product/:productId?/:productName",
    component: _3f007b76,
    name: "services-store-product-productId-productName"
  }, {
    path: "/services/restaurants/:restaurantId/:restaurantName",
    component: _4066ccd6,
    name: "services-restaurants-restaurantId-restaurantName"
  }, {
    path: "/services/store/:subCatId?/:id",
    component: _73a9b350,
    name: "services-store-subCatId-id"
  }, {
    path: "/",
    component: _3cf92317,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
