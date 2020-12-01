import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eebe736a = () => interopDefault(import('..\\pages\\my-cart\\index.vue' /* webpackChunkName: "pages/my-cart/index" */))
const _568515c4 = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _382c8b6a = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _3775eb64 = () => interopDefault(import('..\\pages\\vendor-profile\\index.vue' /* webpackChunkName: "pages/vendor-profile/index" */))
const _131cd085 = () => interopDefault(import('..\\pages\\my-cart\\checkout\\index.vue' /* webpackChunkName: "pages/my-cart/checkout/index" */))
const _5264d5c5 = () => interopDefault(import('..\\pages\\partner\\doctor\\index.vue' /* webpackChunkName: "pages/partner/doctor/index" */))
const _f64781c8 = () => interopDefault(import('..\\pages\\partner\\driver\\index.vue' /* webpackChunkName: "pages/partner/driver/index" */))
const _a4e64a08 = () => interopDefault(import('..\\pages\\partner\\merchant\\index.vue' /* webpackChunkName: "pages/partner/merchant/index" */))
const _e7e8a670 = () => interopDefault(import('..\\pages\\partner\\profession\\index.vue' /* webpackChunkName: "pages/partner/profession/index" */))
const _232ccf86 = () => interopDefault(import('..\\pages\\partner\\realestate-developer\\index.vue' /* webpackChunkName: "pages/partner/realestate-developer/index" */))
const _0a5cdf54 = () => interopDefault(import('..\\pages\\services\\restaurants\\index.vue' /* webpackChunkName: "pages/services/restaurants/index" */))
const _397fdc82 = () => interopDefault(import('..\\pages\\vendor-profile\\my-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/my-auction/index" */))
const _28e0fc42 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/index" */))
const _d8906e38 = () => interopDefault(import('..\\pages\\vendor-profile\\reservation\\index.vue' /* webpackChunkName: "pages/vendor-profile/reservation/index" */))
const _62532a20 = () => interopDefault(import('..\\pages\\vendor-profile\\subscribe-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/subscribe-auction/index" */))
const _6c84cc7f = () => interopDefault(import('..\\pages\\vendor-profile\\wishlist\\index.vue' /* webpackChunkName: "pages/vendor-profile/wishlist/index" */))
const _97f38f9c = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\order-details\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/order-details/index" */))
const _4c6a7031 = () => interopDefault(import('..\\pages\\services\\store\\vendor\\_vendorId\\index.vue' /* webpackChunkName: "pages/services/store/vendor/_vendorId/index" */))
const _aa4d7794 = () => interopDefault(import('..\\pages\\services\\store\\product\\_productId\\_productName\\index.vue' /* webpackChunkName: "pages/services/store/product/_productId/_productName/index" */))
const _f435f3f8 = () => interopDefault(import('..\\pages\\services\\restaurants\\_restaurantId\\_restaurantName\\index.vue' /* webpackChunkName: "pages/services/restaurants/_restaurantId/_restaurantName/index" */))
const _77bf1cff = () => interopDefault(import('..\\pages\\services\\store\\_subCatId\\_id\\index.vue' /* webpackChunkName: "pages/services/store/_subCatId/_id/index" */))
const _75a368f0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _eebe736a,
    name: "my-cart"
  }, {
    path: "/partner",
    component: _568515c4,
    name: "partner"
  }, {
    path: "/services",
    component: _382c8b6a,
    name: "services"
  }, {
    path: "/vendor-profile",
    component: _3775eb64,
    name: "vendor-profile"
  }, {
    path: "/my-cart/checkout",
    component: _131cd085,
    name: "my-cart-checkout"
  }, {
    path: "/partner/doctor",
    component: _5264d5c5,
    name: "partner-doctor"
  }, {
    path: "/partner/driver",
    component: _f64781c8,
    name: "partner-driver"
  }, {
    path: "/partner/merchant",
    component: _a4e64a08,
    name: "partner-merchant"
  }, {
    path: "/partner/profession",
    component: _e7e8a670,
    name: "partner-profession"
  }, {
    path: "/partner/realestate-developer",
    component: _232ccf86,
    name: "partner-realestate-developer"
  }, {
    path: "/services/restaurants",
    component: _0a5cdf54,
    name: "services-restaurants"
  }, {
    path: "/vendor-profile/my-auction",
    component: _397fdc82,
    name: "vendor-profile-my-auction"
  }, {
    path: "/vendor-profile/orders",
    component: _28e0fc42,
    name: "vendor-profile-orders"
  }, {
    path: "/vendor-profile/reservation",
    component: _d8906e38,
    name: "vendor-profile-reservation"
  }, {
    path: "/vendor-profile/subscribe-auction",
    component: _62532a20,
    name: "vendor-profile-subscribe-auction"
  }, {
    path: "/vendor-profile/wishlist",
    component: _6c84cc7f,
    name: "vendor-profile-wishlist"
  }, {
    path: "/vendor-profile/orders/order-details",
    component: _97f38f9c,
    name: "vendor-profile-orders-order-details"
  }, {
    path: "/services/store/vendor/:vendorId",
    component: _4c6a7031,
    name: "services-store-vendor-vendorId"
  }, {
    path: "/services/store/product/:productId?/:productName",
    component: _aa4d7794,
    name: "services-store-product-productId-productName"
  }, {
    path: "/services/restaurants/:restaurantId/:restaurantName",
    component: _f435f3f8,
    name: "services-restaurants-restaurantId-restaurantName"
  }, {
    path: "/services/store/:subCatId?/:id",
    component: _77bf1cff,
    name: "services-store-subCatId-id"
  }, {
    path: "/",
    component: _75a368f0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
