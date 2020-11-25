<template>
    <div class="services-list">
        <div class="container">
            <div class="heading">
                <h2 class="main-head">Services</h2>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/fast-delivery.svg" alt="">
                            </div>
                            <p>Store</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-3">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/pizza.svg" alt="">
                            </div>
                            <p>Restaurants</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-3">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/dog-house.svg" alt="">
                            </div>
                            <p>Realestate</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-3">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/services-key.svg" alt="">
                            </div>
                            <p>Car Rental</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-4">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/kit.svg" alt="">
                            </div>
                            <p>Professions</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-4">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/first-aid-kit.svg" alt="">
                            </div>
                            <p>Medical Services</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-4">
                    <div class="service">
                        <nuxt-link to="/">
                            <div class="service-img">
                            <img src="/images/icons/svg/agenda.svg" alt="">
                            </div>
                            <p>Companies Index</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'withoutNavbar'
}
</script>