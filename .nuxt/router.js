import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4156f0f4 = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _e66813e4 = () => interopDefault(import('..\\pages\\create-password\\index.vue' /* webpackChunkName: "pages/create-password/index" */))
const _6a25547f = () => interopDefault(import('..\\pages\\forget-password\\index.vue' /* webpackChunkName: "pages/forget-password/index" */))
const _114d725e = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _587f08ed = () => interopDefault(import('..\\pages\\mobile-verfication\\index.vue' /* webpackChunkName: "pages/mobile-verfication/index" */))
const _06214c99 = () => interopDefault(import('..\\pages\\my-cart\\index.vue' /* webpackChunkName: "pages/my-cart/index" */))
const _57f4c7dc = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _6abccedc = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _5a1e184f = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _3e7028e6 = () => interopDefault(import('..\\pages\\skeleton\\index.vue' /* webpackChunkName: "pages/skeleton/index" */))
const _ce9e2516 = () => interopDefault(import('..\\pages\\timer\\index.vue' /* webpackChunkName: "pages/timer/index" */))
const _0e0e5156 = () => interopDefault(import('..\\pages\\vendor-profile\\index.vue' /* webpackChunkName: "pages/vendor-profile/index" */))
const _4ed92e13 = () => interopDefault(import('..\\pages\\partner\\doctor\\index.vue' /* webpackChunkName: "pages/partner/doctor/index" */))
const _fd5ed12c = () => interopDefault(import('..\\pages\\partner\\driver\\index.vue' /* webpackChunkName: "pages/partner/driver/index" */))
const _5e4c57ca = () => interopDefault(import('..\\pages\\partner\\merchant\\index.vue' /* webpackChunkName: "pages/partner/merchant/index" */))
const _0adf2e16 = () => interopDefault(import('..\\pages\\partner\\profession\\index.vue' /* webpackChunkName: "pages/partner/profession/index" */))
const _45835fea = () => interopDefault(import('..\\pages\\partner\\realestate-developer\\index.vue' /* webpackChunkName: "pages/partner/realestate-developer/index" */))
const _22554522 = () => interopDefault(import('..\\pages\\services\\restaurants\\index.vue' /* webpackChunkName: "pages/services/restaurants/index" */))
const _1584e774 = () => interopDefault(import('..\\pages\\vendor-profile\\my-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/my-auction/index" */))
const _5ab8545e = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/index" */))
const _38541c32 = () => interopDefault(import('..\\pages\\vendor-profile\\reservation\\index.vue' /* webpackChunkName: "pages/vendor-profile/reservation/index" */))
const _51ce8bbe = () => interopDefault(import('..\\pages\\vendor-profile\\subscribe-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/subscribe-auction/index" */))
const _4058281e = () => interopDefault(import('..\\pages\\vendor-profile\\wishlist\\index.vue' /* webpackChunkName: "pages/vendor-profile/wishlist/index" */))
const _6d757c00 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\order-details\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/order-details/index" */))
const _28766923 = () => interopDefault(import('..\\pages\\services\\store\\vendor\\_vendorId\\index.vue' /* webpackChunkName: "pages/services/store/vendor/_vendorId/index" */))
const _3eedcdb0 = () => interopDefault(import('..\\pages\\services\\store\\product\\_productId\\_productName\\index.vue' /* webpackChunkName: "pages/services/store/product/_productId/_productName/index" */))
const _1ea2b3d2 = () => interopDefault(import('..\\pages\\services\\restaurants\\_restaurantId\\_restaurantName\\index.vue' /* webpackChunkName: "pages/services/restaurants/_restaurantId/_restaurantName/index" */))
const _0445194d = () => interopDefault(import('..\\pages\\services\\store\\_subCatId\\_id\\index.vue' /* webpackChunkName: "pages/services/store/_subCatId/_id/index" */))
const _c136550c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4156f0f4,
    name: "checkout"
  }, {
    path: "/create-password",
    component: _e66813e4,
    name: "create-password"
  }, {
    path: "/forget-password",
    component: _6a25547f,
    name: "forget-password"
  }, {
    path: "/login",
    component: _114d725e,
    name: "login"
  }, {
    path: "/mobile-verfication",
    component: _587f08ed,
    name: "mobile-verfication"
  }, {
    path: "/my-cart",
    component: _06214c99,
    name: "my-cart"
  }, {
    path: "/partner",
    component: _57f4c7dc,
    name: "partner"
  }, {
    path: "/services",
    component: _6abccedc,
    name: "services"
  }, {
    path: "/sign-up",
    component: _5a1e184f,
    name: "sign-up"
  }, {
    path: "/skeleton",
    component: _3e7028e6,
    name: "skeleton"
  }, {
    path: "/timer",
    component: _ce9e2516,
    name: "timer"
  }, {
    path: "/vendor-profile",
    component: _0e0e5156,
    name: "vendor-profile"
  }, {
    path: "/partner/doctor",
    component: _4ed92e13,
    name: "partner-doctor"
  }, {
    path: "/partner/driver",
    component: _fd5ed12c,
    name: "partner-driver"
  }, {
    path: "/partner/merchant",
    component: _5e4c57ca,
    name: "partner-merchant"
  }, {
    path: "/partner/profession",
    component: _0adf2e16,
    name: "partner-profession"
  }, {
    path: "/partner/realestate-developer",
    component: _45835fea,
    name: "partner-realestate-developer"
  }, {
    path: "/services/restaurants",
    component: _22554522,
    name: "services-restaurants"
  }, {
    path: "/vendor-profile/my-auction",
    component: _1584e774,
    name: "vendor-profile-my-auction"
  }, {
    path: "/vendor-profile/orders",
    component: _5ab8545e,
    name: "vendor-profile-orders"
  }, {
    path: "/vendor-profile/reservation",
    component: _38541c32,
    name: "vendor-profile-reservation"
  }, {
    path: "/vendor-profile/subscribe-auction",
    component: _51ce8bbe,
    name: "vendor-profile-subscribe-auction"
  }, {
    path: "/vendor-profile/wishlist",
    component: _4058281e,
    name: "vendor-profile-wishlist"
  }, {
    path: "/vendor-profile/orders/order-details",
    component: _6d757c00,
    name: "vendor-profile-orders-order-details"
  }, {
    path: "/services/store/vendor/:vendorId",
    component: _28766923,
    name: "services-store-vendor-vendorId"
  }, {
    path: "/services/store/product/:productId?/:productName",
    component: _3eedcdb0,
    name: "services-store-product-productId-productName"
  }, {
    path: "/services/restaurants/:restaurantId/:restaurantName",
    component: _1ea2b3d2,
    name: "services-restaurants-restaurantId-restaurantName"
  }, {
    path: "/services/store/:subCatId?/:id",
    component: _0445194d,
    name: "services-store-subCatId-id"
  }, {
    path: "/",
    component: _c136550c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
