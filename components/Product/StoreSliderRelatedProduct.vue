<template>
    <div class="slider-product">
        <div class="swiper arrow-secondary" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="vendor in 10" :key="vendor">
                    <app-single-product></app-single-product>
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
</template>

<script>
import SingleProduct from '~/components/Product/StoreSingleProduct';

export default {
    components: {
        appSingleProduct: SingleProduct
    },
    data() {
        return {
            swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,
                    navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                    }
                    // pagination: {
                    //   el: ".swiper-pagination",
                    //   clickable: true
                    // }
            }
        }
    }
}
</script>