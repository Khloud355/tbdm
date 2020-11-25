<template>
    <section class="product-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">Services</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">Store</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">product</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-8">
                    <div class="product-info">
                        <div class="row">
                            <div class="col-6">
                                <div class="product-slider">

                                    <div class="swiper" v-swiper:mainSwiper="swiperOption">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide" v-for="img in 10" :key="img">
                                                <div class="product-img text-center">
                                                    <img src="/images/jbl-speaker.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-6">
                                <div class="info">
                                    <h5>Super Oversized T-Shirt With Raw Sleeves In Brown</h5>
                                    <div class="rate">
                                        <client-only>
                                            <star-rating 
                                                :rating="3.5" 
                                                :increment=".5"
                                                :read-only="true" 
                                                active-color="#FFD506" 
                                                :show-rating="false" 
                                                :star-size="20"
                                                :padding=".9">
                                            </star-rating>
                                        </client-only>
                                    </div>
                                    <div class="price">
                                        <p class="original">$13.99</p>
                                        <p class="sale">$26.00</p>
                                        <p class="percent">50%</p>
                                    </div>
                                    <div class="quantity">
                                        <p>Quantity</p>
                                        <div class="control">
                                            <span>
                                                <img src="/images/icons/svg/minus-black.svg" alt="">
                                            </span>
                                            <span>2</span>
                                            <span>
                                                <img src="/images/icons/svg/plus-black.svg" alt="">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row no-gutters actions">
                                        <div class="col wishlist-btn">
                                            <img src="/images/icons/svg/heart-empty.svg" alt="">
                                            <span>WISHLIST</span>
                                        </div>
                                        <div class="col add-cart-btn">
                                            <img src="/images/icons/svg/shopping-bag.svg" alt="">
                                            <span>ADD TO CART</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 slider-thumbnails">
                                <div class="product-thumbnails">
                                    <div class="slider">
                                        <div class="swiper arrow-secondary" v-swiper:thumbnailSwiper="swiperThumbnailOption">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide" v-for="img in 10" :key="img">
                                                    <div class="thumbnail">
                                                        <img src="/images/T-shirt.png" alt="">
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

                    <div class="desc-reviews">
                        <div>
                            <b-tabs content-class="mt-3">
                                <b-tab title="Desription" >
                                    <div class="desc">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </b-tab>
                                <b-tab title="Reviews" active>
                                    <div class="reviews">
                                        <div class="add-review">
                                            <h4>Add your review</h4>
                                            <div class="row no-gutters">
                                                <div class="col-3">
                                                    <h6>Your review</h6>
                                                </div>
                                                <div class="col-9">
                                                    <textarea class="form-control" id="review" rows="4"></textarea>
                                                </div>
                                            </div>
                                            <div class="row no-gutters">
                                                <div class="col-3 d-flex align-items-center">
                                                    <h6>Overall rating</h6>
                                                </div>
                                                <div class="col-9">
                                                    <client-only>
                                                        <star-rating 
                                                            :rating="3.5" 
                                                            :increment=".5"
                                                            active-color="#FFD506" 
                                                            :show-rating="false" 
                                                            :star-size="20"
                                                            :padding=".9">
                                                        </star-rating>
                                                    </client-only>
                                                </div>
                                            </div>
                                            <div class="row no-gutters">
                                                <div class="col-3"></div>
                                                <div class="col-9">
                                                    <button class="btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="prev-reviews">
                                            <h4>Previous reviews</h4>
                                            <div class="row no-gutters review">
                                                <div class="col-3">
                                                    <client-only>
                                                        <star-rating 
                                                            :rating="3.5" 
                                                            :increment=".5"
                                                            :read-only="true" 
                                                            active-color="#FFD506" 
                                                            :show-rating="false" 
                                                            :star-size="20"
                                                            :padding=".9">
                                                        </star-rating>
                                                    </client-only>
                                                    <h6>Pablo Permins</h6>
                                                    <span class="time">one hour ago</span>
                                                </div>
                                                <div class="col-9">
                                                    <div class="comment">
                                                        <p>Got this through the post the other day and right from opening the packet I knew this was quality, put it on and I was right!! Well done</p>
                                                        <div class="icons">
                                                            <div class="icon">
                                                                <span class="image">
                                                                    <img src="/images/icons/svg/comment-heart.svg" alt="">
                                                                </span>
                                                                <span class="count">113</span>
                                                            </div>
                                                            <div class="icon">
                                                                <span class="image">
                                                                    <img src="/images/icons/svg/icon-comment.svg" alt="">
                                                                </span>
                                                                <span class="count">6</span>
                                                            </div>
                                                            <!-- <div class="more">
                                                                <p>See more reviews</p>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row no-gutters review">
                                                <div class="col-3">
                                                    <client-only>
                                                        <star-rating 
                                                            :rating="3.5" 
                                                            :increment=".5"
                                                            :read-only="true" 
                                                            active-color="#FFD506" 
                                                            :show-rating="false" 
                                                            :star-size="20"
                                                            :padding=".9">
                                                        </star-rating>
                                                    </client-only>
                                                    <h6>Pablo Permins</h6>
                                                    <span class="time">one hour ago</span>
                                                </div>
                                                <div class="col-9">
                                                    <div class="comment">
                                                        <p>Got this through the post the other day and right from opening the packet I knew this was quality, put it on and I was right!! Well done</p>
                                                        <div class="icons">
                                                            <div class="icon">
                                                                <span class="image">
                                                                    <img src="/images/icons/svg/comment-heart.svg" alt="">
                                                                </span>
                                                                <span class="count">113</span>
                                                            </div>
                                                            <div class="icon">
                                                                <span class="image">
                                                                    <img src="/images/icons/svg/icon-comment.svg" alt="">
                                                                </span>
                                                                <span class="count">6</span>
                                                            </div>
                                                            <!-- <div class="more">
                                                                <p>See more reviews</p>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="more">
                                                <p>See more reviews</p>
                                            </div>

                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>

                    <div class="related-products">
                        <div class="head">
                            <h2>Related Products</h2>
                            <nuxt-link to="/">See more</nuxt-link>
                        </div>
                        <div class="products">
                            <app-related-products></app-related-products>
                        </div>
                    </div>

                </div>
                <div class="col-4">
                    <div class="vendor-profile">
                        <h3>Vendor Profile</h3>
                        <div class="info">
                            <img src="/images/vendor.png" alt="">
                            <div class="name">
                                <h5>Tom Hanks</h5>
                                <span>2,465 Product</span>
                            </div>
                            <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>414-4645-5416</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>info@tbdm.net</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>New Cairo, Egypt</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="vendor-products">
                        <h3>Vendor Products</h3>
                        <app-single-product></app-single-product>
                        <app-single-product></app-single-product>
                        <div class="see-more">
                            <nuxt-link to="/" class="btn">See More</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import SingleProduct from '~/components/Product/StoreSingleProduct';
import RelatedProducts from '~/components/Product/StoreSliderRelatedProduct';

export default {
    components: {
        appSingleProduct: SingleProduct,
        appRelatedProducts: RelatedProducts
    },
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
                spaceBetween: 10,
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