<template>
    <section class="store">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">Services</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Store</li>
                </ol>
            </nav>

            <app-main-categories></app-main-categories>

            <app-hot-offers></app-hot-offers>

            <section class="like">
                <div class="head">
                    <h2>Products you may like</h2>
                    <nuxt-link to="/">See more</nuxt-link>
                </div>

                <div class="products">
                    <app-slider-product></app-slider-product>
                </div>

            </section>

            <section class="popular">
                <div class="head">
                    <h2>Popular products</h2>
                    <nuxt-link to="/">See more</nuxt-link>
                </div>

                <div class="products">
                    <app-slider-product></app-slider-product>
                </div>

            </section>

            <section class="vendors">
                <div class="head">
                    <h2>Popular Vendors</h2>
                    <nuxt-link to="/">See more</nuxt-link>
                </div>

                <!-- <app-slider-product></app-slider-product> -->
                <div class="popular-vendors">
                    <app-vendor-slider></app-vendor-slider>
                </div>

            </section>

        </div>
    </section>
</template>

<script>
import MainCategories from '~/components/Categories/StoreMainCategories';
import HotOffers from '~/components/Product/StoreSliderOffer';
import SliderProduct from '~/components/Product/StoreSliderProduct';
import VendorSlider from '~/components/Vendor/StoreSliderVendor'

export default {
    components: {
        appMainCategories: MainCategories,
        appHotOffers: HotOffers,
        appSliderProduct: SliderProduct,
        appVendorSlider: VendorSlider
    },
    data() {
        return {

        }
    }
}
</script>
