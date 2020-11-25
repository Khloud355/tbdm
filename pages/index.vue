<template>
  <section class="home">
    <!-- <div class="container"> -->
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="col-7">
              <div class="text">
                <h1>Everything at Your Fingertips</h1>
                <h3>What we offer?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. </p>
              </div>
            </div>
            <div class="col-5">
              <div class="video">
                <img src="images/home-video.PNG" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading">
                <h2 class="main-head">What we offer?</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-services.svg" alt="">
                    </div>
                    <p>Services</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-auction.svg" alt="">
                    </div>
                    <p>Auctions</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-buy.svg" alt="">
                    </div>
                    <p>Buy & Sell</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-index.svg" alt="">
                    </div>
                    <p>Index</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-chat.svg" alt="">
                    </div>
                    <p>Chat</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-ideas-bank.svg" alt="">
                    </div>
                    <p>Ideas Bank</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-news.svg" alt="">
                    </div>
                    <p>News</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                  <div class="service-img">
                    <img src="/images/icons/svg/icon-soon.svg" alt="">
                  </div>
                  <p>Coming Soon</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="partner">
          <div class="container">
            <div class="row">
              <div class="col-9">
                <h2>Become Our Sucess Partner</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.</p>
                <nuxt-link to="/" class="btn">Become a Partner</nuxt-link>
              </div>
              <div class="col-3">
                <img src="/images/icons/svg/icon-rocket.svg" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="vendors">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="heading">
                  <h2 class="main-head">Vendors</h2>
                </div>
                <app-vendor-slider></app-vendor-slider>
              </div>
            </div>
          </div>
        </div>

    <!-- </div> -->
  </section>
</template>

<script>
import VendorSlider from '~/components/Vendor/SliderVendor'

export default {
  components: {
    appVendorSlider: VendorSlider
  },
  layout: 'withoutNavbar',
  middleware(context) {

    //  context.redirect('/eg-en')
  }
}
</script>
