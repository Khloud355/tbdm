<template>
  <section class="my-cart">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="cart">
            <h3>My Cart</h3>
            <div class="cart-item">
              <div class="row no-gutters">
                <div class="col-md-8">
                  <span>Item</span>
                </div>

                <div class="col-3"><span style="margin-left: 1.2rem;">Quantity</span></div>
                <div class="col-1">
                  <span>price</span>
                </div>
              </div>
            </div>
            <div class="cart-content" v-for="cart in 4" :key="cart">
              <div class="row counter no-gutters">
                <div class="col-8">
                  <div class="content">
                    <div class="content-img">
               <a href="">  <img src="/images/person.jpeg" alt="" /></a>     
                    </div>
                    <div class="details">
                      <p class="bold"> <a href="">Green T-shirt 2016</a></p>
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
                      <img
                        src="/images/icons/svg/icons-minus-black.svg"
                        alt=""
                      />
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
        <div class="col-md-4">
          <div class="summery">
            <h3>Summary</h3>
            <ul>
              <li>
                <div class="summery_details">
                  <span class="text">SubTotal</span>
                  <span class="num">$1,75584</span>
              </div>
              </li>
              <li>
                <div class="summery_details">
                  <span class="text">Shipping</span>
                  <span class="num">$00.00</span>
                </div>
              </li>
              <li>
                <div class="summery_details">
                  <span class="text">Discount</span>
                  <span class="num">$10.00</span>
                </div>
              </li>
              <li>
               <div class="summery_details">
                  <span class="text">Taxes</span>
                  <span class="num">$24.00</span>
               </div>
              </li>
              <li>
                <div class="summery_details end">
                  <span class="text">Total</span>
                  <span class="number">$1,765.657</span>
                </div>
              </li>
            </ul>
         <nuxt-link to="checkout" class="btn-ckeckout">Checkout</nuxt-link>    
          </div>
        </div>
      </div>
    </div>
  </section>
</template>