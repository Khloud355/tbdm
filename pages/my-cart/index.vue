<template>
  <section class="my-cart">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="cart">
            <div class="cart-item">
              <div class="row no-gutters">
                <div class="col-md-8">
                  <span>Item</span>
                </div>

                <div class="col-3 text-center"><span>Quantity</span></div>
                <div class="col-1">
                  <span>price</span>
                </div>
              </div>
            </div>
            <div class="cart-content" v-for="wishlist in 4" :key="wishlist">
              <div class="row counter no-gutters">
                <div class="col-8">
                  <div class="content">
                    <div class="content-img">
                      <img src="/images/person.jpeg" alt="" />
                    </div>
                    <div class="details">
                      <p class="bold">Green T-shirt 2016</p>
                      <p>Men BK3569</p>

                      <div class="remove">
                        <img
                          src="/images/icons/svg/icons-close-small-red.svg"
                          alt=""
                        />
                        <span>Remove</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3">
                  <div class="control">
                    <span>
                      <img src="/images/icons/svg/icons-minus-black.svg" alt="" />
                    </span>
                    <span>2</span>
                    <span>
                      <img src="/images/icons/svg/plus-black.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div class="col-1">
                  <span class="price">£21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </section>
</template>