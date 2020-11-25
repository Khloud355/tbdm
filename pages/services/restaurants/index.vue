<template>
<section class="restaurants-page">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item"><nuxt-link to="/">Services</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">Restaurants</li>
            </ol>
        </nav>

        <app-main-categories></app-main-categories>

        <div class="restaurants">
            <div class="row">
                <div class="col-4" v-for="restaurant in 9" :key="restaurant">
                    <app-single-restaurant></app-single-restaurant>
                </div>
            </div>
        </div>

        <div class="paginator">
            <div class="overflow-auto">
                <b-pagination-nav :link-gen="linkGen" :limit="10" :hide-goto-end-buttons="true" :number-of-pages="10" align="center" use-router>
                    <template #prev-text><span><img src="/images/icons/svg/chevron-left.svg" alt=""></span></template>
                    <template #next-text><span><img src="/images/icons/svg/chevron-right.svg" alt=""></span></template>
                </b-pagination-nav>
            </div>
        </div>

    </div>
</section>
</template>

<script>
import MainCategories from '~/components/Categories/RestaurantMainCategories'
import SingleRestaurant from '~/components/Vendor/SingleRestaurant'

export default {
    components: {
        appMainCategories: MainCategories,
        appSingleRestaurant: SingleRestaurant
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
}
</script>