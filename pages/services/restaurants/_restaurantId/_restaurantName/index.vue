<template>
    <section class="restaurant-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">Services</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">Restaurants</nuxt-link></li>
                    <!-- this will be restaurant name -->
                    <li class="breadcrumb-item active" aria-current="page">Restaurant Profile</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-8">

                    <div class="restaurant-slider">
                        <div class="product-slider">

                            <div class="swiper" v-swiper:mainSwiper="swiperOption">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="img in 10" :key="img">
                                        <div class="product-img">
                                            <img src="/images/image22.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="slider-thumbnails">
                            <div class="product-thumbnails">
                                <div class="slider">
                                    <div class="swiper arrow-secondary" v-swiper:thumbnailSwiper="swiperThumbnailOption">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide" v-for="img in 10" :key="img">
                                                <div class="thumbnail">
                                                    <img src="/images/image22.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-button-prev" slot="button-prev">
                                            <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                                        </div>
                                        <div class="swiper-button-next" slot="button-next">
                                            <img src="/images/icons/svg/offers-arrow.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                    slidesPerView: 1,
                    loopedSlides: 10,
                    loop: true,
                    // spaceBetween: 14,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,

                    // pagination: {
                    //   el: ".swiper-pagination",
                    //   clickable: true
                    // }
            },
            swiperThumbnailOption: {
                slidesPerView: 7,
                spaceBetween: 15,
                slideToClickedSlide: true,
                loop: true,
                loopedSlides: 10,
                // touchRatio: 0.8,
                // centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        }
    },
    mounted() {
        this.mainSwiper.controller.control = this.thumbnailSwiper;
        this.thumbnailSwiper.controller.control = this.mainSwiper;
        console.log('swiper >>> ', this.mainSwiper.controller.control);
    }
}
</script>