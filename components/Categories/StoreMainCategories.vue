<template>
  <section class="cat-slider">
    <!-- <VueSlickCarousel v-bind="slickOptions">

            <div class="mini-cat"><nuxt-link to="/" class="active">All Categories</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/catId/electronics">Electronics</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">cosmatics</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">Makeupgggggggggg</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">Makeupgggggggggg</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">Perfumes</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">Pharmacy</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">vegetables</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">Perfumes</nuxt-link></div>
            <div class="mini-cat"><nuxt-link to="/">cosmatics</nuxt-link></div>

            </VueSlickCarousel> -->

    <div class="cat-carousel">
      <div class="swiper" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/" class="active">All</nuxt-link></div> -->
            <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/catId/electronics">Electronics</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">cosmatics</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">Makeupgggggggggg</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">Perfumes</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">vegetables</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">Perfumes</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">cosmatics</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">cosmatics</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">Makeupgggggggggg</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
          <div class="swiper-slide">
            <!-- <div class="mini-cat"><nuxt-link to="/">Perfumes</nuxt-link></div> -->
             <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </v-sheet>
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev">
          <img
            style="transform: rotate(180deg)"
            src="/images/icons/svg/store-cat-arrow.svg"
            alt=""
          />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <img src="/images/icons/svg/store-cat-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },

  data() {
    return {
      slickOptions: {
        arrows: true,
        // "focusOnSelect": true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        // "centerPadding": "20px",
        // "centerMode": true,
        infinite: false,
      },
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 30,
        // initialSlide: 1
        // centeredSlides: true,
        // loop: true,
        // loopedSlides: 54,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // }
      },
    };
  },
};
</script>