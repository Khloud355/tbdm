<template>
    <section class="header">
        <div class="container">
            <div class="elements">
                <div class="logo">
                    <nuxt-link to="/">
                        <img src="/images/icons/svg/header-logo.svg" alt="">
                    </nuxt-link>
                </div>
                <div class="search">
                    <div class="input-group input-group-lg">
                        <input type="text" placeholder="Type products, brands or categories" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <img src="/images/icons/svg/header-search.svg" alt="">
                            </span>
                        </div>
                    </div>
                </div>
                <div class="preferences">
                    <span class="login-menu" id="popover-login" tabindex="0">
                        <img src="/images/icons/svg/header-user.svg" alt="">
                        <span>Login</span>
                        <img src="/images/icons/svg/header-bottom-arrow.svg" alt="">
                    </span>
                    <span class="wishlist">
                        <img src="/images/icons/svg/header-heart.svg" alt="">
                        <span>1</span>
                    </span>
                    <span class="cart" id="popover-cart" tabindex="0">
                        <img src="/images/icons/svg/header-cart.svg" alt="">
                        <span>2</span>
                    </span>
                    <span class="separator"></span>
                    <span class="currency">
                        <img src="/images/icons/svg/header-curr.svg" alt="">
                        <span>USD</span>
                    </span>
                    <span class="lang">
                        <img src="/images/icons/svg/header-lang.svg" alt="">
                        <span>EN</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Login popup -->
        <b-popover placement="bottom" target="popover-login" triggers="click blur">
            <!-- <template #title>My Wishlist</template> -->
            <div class="login-popup text-center">
                <nuxt-link to="/" class="login-btn">Log In</nuxt-link>
                <p>Don't have an account?</p>
                <nuxt-link to="/" class="signup">Sign Up</nuxt-link>
                <span>Or</span>
                <nuxt-link to="/" class="partner-btn">Become a Partner</nuxt-link>
            </div>
        </b-popover>

        <!-- Cart popup -->
        <b-popover placement="bottom" target="popover-cart" triggers="click blur">
            <template #title>My Cart</template>
            <div class="cart-popup">
                <div class="products">
                    <div class="row">
                        <div class="col-4">
                            <img src="/images/apple-watch.PNG" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <h6>Green T-shirt Men</h6>
                            <p>QTY: 2</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <img src="/images/apple-watch.PNG" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <h6>Green T-shirt Men</h6>
                            <p>QTY: 2</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <img src="/images/apple-watch.PNG" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <h6>Green T-shirt Men</h6>
                            <p>QTY: 2</p>
                        </div>
                    </div>
                </div>
                <p class="total text-center">Total: <strong>426</strong> <span>EGP</span></p>
                <div class="action-btns">
                    <nuxt-link to="/" class="btn cart">View Cart</nuxt-link>
                    <nuxt-link to="/" class="btn checkout">Checkout</nuxt-link>
                </div>
            </div>
        </b-popover>

    </section>
</template>