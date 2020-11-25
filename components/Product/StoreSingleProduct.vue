<template>
    <div class="product">
        <div class="product-container">
            <div class="vendor-img">
                <img src="/images/offer-logo.PNG" alt="">
            </div>
            <div class="sale">
                <span>50%</span>
            </div>
            <div class="card">
                <div class="card-hover">
                    <div class="product-img">
                        <img src="/images/apple-watch.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="info">
                            <div class="rate">
                                <span>3.4</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                            <div class="price">
                                <span class="discount">$500</span>
                                <span class="original">$400</span>
                            </div>
                        </div>
                        <h6>Apple Watch Series 4 GPS</h6>
                        <p>Redesigned from scratch and completely revised.</p>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col-6 wishlist-btn" :class="{'hide-btn': quantity}">
                            <img src="/images/icons/svg/heart-empty.svg" alt="">
                            <span>WISHLIST</span>
                        </div>
                        <div class="col-6 add-cart-btn" :class="{'hide-btn': quantity}" @click="quantity = true">
                            <img src="/images/icons/svg/shopping-bag.svg" alt="">
                            <span>ADD TO CART</span>
                        </div>
                        <div class="col-12 control" :class="{'hide': !quantity}" @click="quantity = false">
                            added
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: false
        }
    }
}
</script>