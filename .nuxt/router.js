import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d8c8846 = () => interopDefault(import('..\\pages\\checkout\\index.vue' /* webpackChunkName: "pages/checkout/index" */))
const _17f879f6 = () => interopDefault(import('..\\pages\\create-password\\index.vue' /* webpackChunkName: "pages/create-password/index" */))
const _5d45bd14 = () => interopDefault(import('..\\pages\\forget-password\\index.vue' /* webpackChunkName: "pages/forget-password/index" */))
const _7730e6f0 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _21d7f6d4 = () => interopDefault(import('..\\pages\\mobile-verfication\\index.vue' /* webpackChunkName: "pages/mobile-verfication/index" */))
const _6e95fee0 = () => interopDefault(import('..\\pages\\my-cart\\index.vue' /* webpackChunkName: "pages/my-cart/index" */))
const _d2cd5fee = () => interopDefault(import('..\\pages\\partner\\index.vue' /* webpackChunkName: "pages/partner/index" */))
const _0ac0cc76 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _1cb1cc46 = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _70aab676 = () => interopDefault(import('..\\pages\\skeleton\\index.vue' /* webpackChunkName: "pages/skeleton/index" */))
const _65bf332c = () => interopDefault(import('..\\pages\\timer\\index.vue' /* webpackChunkName: "pages/timer/index" */))
const _7cbd897f = () => interopDefault(import('..\\pages\\vendor-profile\\index.vue' /* webpackChunkName: "pages/vendor-profile/index" */))
const _9cc78210 = () => interopDefault(import('..\\pages\\Forms\\add-car.vue' /* webpackChunkName: "pages/Forms/add-car" */))
const _90780fc8 = () => interopDefault(import('..\\pages\\News\\single-topic.vue' /* webpackChunkName: "pages/News/single-topic" */))
const _276d9f54 = () => interopDefault(import('..\\pages\\News\\topics.vue' /* webpackChunkName: "pages/News/topics" */))
const _93de09ec = () => interopDefault(import('..\\pages\\partner\\doctor\\index.vue' /* webpackChunkName: "pages/partner/doctor/index" */))
const _2eef373e = () => interopDefault(import('..\\pages\\partner\\driver\\index.vue' /* webpackChunkName: "pages/partner/driver/index" */))
const _527679fe = () => interopDefault(import('..\\pages\\partner\\merchant\\index.vue' /* webpackChunkName: "pages/partner/merchant/index" */))
const _46e9a78d = () => interopDefault(import('..\\pages\\partner\\profession\\index.vue' /* webpackChunkName: "pages/partner/profession/index" */))
const _6394a0c2 = () => interopDefault(import('..\\pages\\partner\\realestate-developer\\index.vue' /* webpackChunkName: "pages/partner/realestate-developer/index" */))
const _f4b1864e = () => interopDefault(import('..\\pages\\services\\restaurants\\index.vue' /* webpackChunkName: "pages/services/restaurants/index" */))
const _5bc7abc6 = () => interopDefault(import('..\\pages\\vendor-profile\\my-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/my-auction/index" */))
const _4cde560c = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/index" */))
const _0ea52ea9 = () => interopDefault(import('..\\pages\\vendor-profile\\reservation\\index.vue' /* webpackChunkName: "pages/vendor-profile/reservation/index" */))
const _2e8fa8f5 = () => interopDefault(import('..\\pages\\vendor-profile\\subscribe-auction\\index.vue' /* webpackChunkName: "pages/vendor-profile/subscribe-auction/index" */))
const _4104764c = () => interopDefault(import('..\\pages\\vendor-profile\\wishlist\\index.vue' /* webpackChunkName: "pages/vendor-profile/wishlist/index" */))
const _0d922892 = () => interopDefault(import('..\\pages\\vendor-profile\\orders\\order-details\\index.vue' /* webpackChunkName: "pages/vendor-profile/orders/order-details/index" */))
const _384e1a68 = () => interopDefault(import('..\\pages\\services\\store\\vendor\\_vendorId\\index.vue' /* webpackChunkName: "pages/services/store/vendor/_vendorId/index" */))
const _80459e5e = () => interopDefault(import('..\\pages\\services\\store\\product\\_productId\\_productName\\index.vue' /* webpackChunkName: "pages/services/store/product/_productId/_productName/index" */))
const _19900f89 = () => interopDefault(import('..\\pages\\services\\restaurants\\_restaurantId\\_restaurantName\\index.vue' /* webpackChunkName: "pages/services/restaurants/_restaurantId/_restaurantName/index" */))
const _4e4a1844 = () => interopDefault(import('..\\pages\\services\\store\\_subCatId\\_id\\index.vue' /* webpackChunkName: "pages/services/store/_subCatId/_id/index" */))
const _31737fa3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5d8c8846,
    name: "checkout"
  }, {
    path: "/create-password",
    component: _17f879f6,
    name: "create-password"
  }, {
    path: "/forget-password",
    component: _5d45bd14,
    name: "forget-password"
  }, {
    path: "/login",
    component: _7730e6f0,
    name: "login"
  }, {
    path: "/mobile-verfication",
    component: _21d7f6d4,
    name: "mobile-verfication"
  }, {
    path: "/my-cart",
    component: _6e95fee0,
    name: "my-cart"
  }, {
    path: "/partner",
    component: _d2cd5fee,
    name: "partner"
  }, {
    path: "/services",
    component: _0ac0cc76,
    name: "services"
  }, {
    path: "/sign-up",
    component: _1cb1cc46,
    name: "sign-up"
  }, {
    path: "/skeleton",
    component: _70aab676,
    name: "skeleton"
  }, {
    path: "/timer",
    component: _65bf332c,
    name: "timer"
  }, {
    path: "/vendor-profile",
    component: _7cbd897f,
    name: "vendor-profile"
  }, {
    path: "/Forms/add-car",
    component: _9cc78210,
    name: "Forms-add-car"
  }, {
    path: "/News/single-topic",
    component: _90780fc8,
    name: "News-single-topic"
  }, {
    path: "/News/topics",
    component: _276d9f54,
    name: "News-topics"
  }, {
    path: "/partner/doctor",
    component: _93de09ec,
    name: "partner-doctor"
  }, {
    path: "/partner/driver",
    component: _2eef373e,
    name: "partner-driver"
  }, {
    path: "/partner/merchant",
    component: _527679fe,
    name: "partner-merchant"
  }, {
    path: "/partner/profession",
    component: _46e9a78d,
    name: "partner-profession"
  }, {
    path: "/partner/realestate-developer",
    component: _6394a0c2,
    name: "partner-realestate-developer"
  }, {
    path: "/services/restaurants",
    component: _f4b1864e,
    name: "services-restaurants"
  }, {
    path: "/vendor-profile/my-auction",
    component: _5bc7abc6,
    name: "vendor-profile-my-auction"
  }, {
    path: "/vendor-profile/orders",
    component: _4cde560c,
    name: "vendor-profile-orders"
  }, {
    path: "/vendor-profile/reservation",
    component: _0ea52ea9,
    name: "vendor-profile-reservation"
  }, {
    path: "/vendor-profile/subscribe-auction",
    component: _2e8fa8f5,
    name: "vendor-profile-subscribe-auction"
  }, {
    path: "/vendor-profile/wishlist",
    component: _4104764c,
    name: "vendor-profile-wishlist"
  }, {
    path: "/vendor-profile/orders/order-details",
    component: _0d922892,
    name: "vendor-profile-orders-order-details"
  }, {
    path: "/services/store/vendor/:vendorId",
    component: _384e1a68,
    name: "services-store-vendor-vendorId"
  }, {
    path: "/services/store/product/:productId?/:productName",
    component: _80459e5e,
    name: "services-store-product-productId-productName"
  }, {
    path: "/services/restaurants/:restaurantId/:restaurantName",
    component: _19900f89,
    name: "services-restaurants-restaurantId-restaurantName"
  }, {
    path: "/services/store/:subCatId?/:id",
    component: _4e4a1844,
    name: "services-store-subCatId-id"
  }, {
    path: "/",
    component: _31737fa3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
