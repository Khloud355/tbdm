import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ef102ba = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _1d3e3d34 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _38699dae = () => interopDefault(import('..\\pages\\vendor-profile\\index.vue' /* webpackChunkName: "pages/vendor-profile/index" */))
const _6fe76cbb = () => interopDefault(import('..\\pages\\partner\\doctor\\index.vue' /* webpackChunkName: "pages/partner/doctor/index" */))
const _bb4253dc = () => interopDefault(import('..\\pages\\partner\\driver\\index.vue' /* webpackChunkName: "pages/partner/driver/index" */))
const _74c58c72 = () => interopDefault(import('..\\pages\\partner\\merchant\\index.vue' /* webpackChunkName: "pages/partner/merchant/index" */))
const _67ddd8be = () => interopDefault(import('..\\pages\\partner\\profession\\index.vue' /* webpackChunkName: "pages/partner/profession/index" */))
const _2985c8b3 = () => interopDefault(import('..\\pages\\partner\\realestate-developer\\index.vue' /* webpackChunkName: "pages/partner/realestate-developer/index" */))
const _3a53e5ca = () => interopDefault(import('..\\pages\\services\\restaurants\\index.vue' /* webpackChunkName: "pages/services/restaurants/index" */))
const _72586fcc = () => interopDefault(import('..\\pages\\vendor-profile\\my-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/my-auction/index" */))
const _8b0d6bae = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/index" */))
const _75f19eda = () => interopDefault(import('..\\pages\\vendor-profile\\reservation\\index.vue' /* webpackChunkName: "pages/vendor-profile/reservation/index" */))
const _724d1f34 = () => interopDefault(import('..\\pages\\vendor-profile\\subscribe-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/subscribe-auction/index" */))
const _281daa49 = () => interopDefault(import('..\\pages\\vendor-profile\\wishlist\\index.vue' /* webpackChunkName: "pages/vendor-profile/wishlist/index" */))
const _54c8197b = () => interopDefault(import('..\\pages\\services\\store\\vendor\\_vendorId\\index.vue' /* webpackChunkName: "pages/services/store/vendor/_vendorId/index" */))
const _6441cd00 = () => interopDefault(import('..\\pages\\services\\store\\product\\_productId\\_productName\\index.vue' /* webpackChunkName: "pages/services/store/product/_productId/_productName/index" */))
const _29b4b47a = () => interopDefault(import('..\\pages\\services\\restaurants\\_restaurantId\\_restaurantName\\index.vue' /* webpackChunkName: "pages/services/restaurants/_restaurantId/_restaurantName/index" */))
const _5c9107f5 = () => interopDefault(import('..\\pages\\services\\store\\_subCatId\\_id\\index.vue' /* webpackChunkName: "pages/services/store/_subCatId/_id/index" */))
const _74d3d1d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/partner",
    component: _7ef102ba,
    name: "partner"
  }, {
    path: "/services",
    component: _1d3e3d34,
    name: "services"
  }, {
    path: "/vendor-profile",
    component: _38699dae,
    name: "vendor-profile"
  }, {
    path: "/partner/doctor",
    component: _6fe76cbb,
    name: "partner-doctor"
  }, {
    path: "/partner/driver",
    component: _bb4253dc,
    name: "partner-driver"
  }, {
    path: "/partner/merchant",
    component: _74c58c72,
    name: "partner-merchant"
  }, {
    path: "/partner/profession",
    component: _67ddd8be,
    name: "partner-profession"
  }, {
    path: "/partner/realestate-developer",
    component: _2985c8b3,
    name: "partner-realestate-developer"
  }, {
    path: "/services/restaurants",
    component: _3a53e5ca,
    name: "services-restaurants"
  }, {
    path: "/vendor-profile/my-auction",
    component: _72586fcc,
    name: "vendor-profile-my-auction"
  }, {
    path: "/vendor-profile/orders",
    component: _8b0d6bae,
    name: "vendor-profile-orders"
  }, {
    path: "/vendor-profile/reservation",
    component: _75f19eda,
    name: "vendor-profile-reservation"
  }, {
    path: "/vendor-profile/subscribe-auction",
    component: _724d1f34,
    name: "vendor-profile-subscribe-auction"
  }, {
    path: "/vendor-profile/wishlist",
    component: _281daa49,
    name: "vendor-profile-wishlist"
  }, {
    path: "/services/store/vendor/:vendorId",
    component: _54c8197b,
    name: "services-store-vendor-vendorId"
  }, {
    path: "/services/store/product/:productId?/:productName",
    component: _6441cd00,
    name: "services-store-product-productId-productName"
  }, {
    path: "/services/restaurants/:restaurantId/:restaurantName",
    component: _29b4b47a,
    name: "services-restaurants-restaurantId-restaurantName"
  }, {
    path: "/services/store/:subCatId?/:id",
    component: _5c9107f5,
    name: "services-store-subCatId-id"
  }, {
    path: "/",
    component: _74d3d1d2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
