<template>
  <section class="checkout">
    <div class="container">
      <div class="checkout-content">
        <h3>Checkout</h3>
        <v-stepper v-model="e1" alt-labels>
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"
              >Delivery</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"
              >Confirmation</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">Payment</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4">Finish</v-stepper-step>
          </v-stepper-header>

          <form @submit.prevent>
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="checkout-form">
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="firstname">First Name*</label>
                      <input class="form-control form-control-lg" type="text" />
                    </div>

                    <div class="form-group col-6">
                      <label for="lastname">Last Name*</label>
                      <input class="form-control form-control-lg" type="text" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="address">Address*</label>
                      <input class="form-control form-control-lg" type="text" />
                    </div>

                    <div class="form-group col-md-6">
                      <label for="city">City*</label>
                      <select id="city" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="state">State*</label>
                      <select id="state" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="code">ZIP Code*</label>
                      <input class="form-control form-control-lg" type="text" />
                    </div>
                  </div>
                  <div class="country-type">
                    <span class="country">Country:</span>
                    <span class="country-name">Egypt*</span>

                    <div class="checkbox">
                      <b-form-checkbox
                        >My billing information is the same as my delivery
                        informaiton</b-form-checkbox
                      >
                    </div>
                  </div>
                  <div class="delivery-option">
                    <h4>Delivery option</h4>
                    <div class="radio-button">
                      <div class="row justify-space-between">
                        <div class="col-6">
                          <b-form-radio name="radio-size"
                            >Standard shipping:
                            <span class="busines-day"
                              >(free, 2-3 business day)</span
                            >
                          </b-form-radio>
                        </div>
                        <div class="col-6">
                          <b-form-radio name="radio-size"
                            >Express shipping:
                            <span class="busines-day"
                              >(28, 1-2 business day)</span
                            >
                          </b-form-radio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn" type="button" @click="e1 = 2">
                  <span>Next</span>
                </button>
              </v-stepper-content>
              <v-stepper-content step="2">
                <div class="order-confirmation">
                  <div class="row">
                    <div class="col-7">
                      <h5>Order summery</h5>
                      <div class="order-summery-head">
                        <div class="row">
                          <div class="col-8">
                            <span>Item</span>
                          </div>
                          <div class="col-2">
                            <span>Qty</span>
                          </div>
                          <div class="col-2">
                            <span>Price</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="order-summery-content"
                        v-for="order in 4"
                        :key="order"
                      >
                        <div class="row">
                          <div class="col-8">
                            <span class="type"> Green T-shirt </span>
                          </div>
                          <div class="col-2">
                            <span class="num">2</span>
                          </div>
                          <div class="col-2">
                            <span class="price">£15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-1"></div>

                    <div class="col-4">
                      <h5>Delivery</h5>
                      <div class="details">
                        <h6>Address</h6>
                        <p>lorem khloud,kjffkncdmsac.mdl ,vnjfbv ifbk</p>
                        <h6>Delivery options</h6>
                        <p>
                          standard delivery
                          <span>(free,2-3 days)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="other-details">
                  <div class="subtotal">
                    <span class="total"> Subtotal </span>
                    <span class="num">£7000</span>
                  </div>
                  <div class="shiping">
                    <span class="ship"> Shipping </span>
                    <span class="free">free</span>
                  </div>
                  <div class="grandtotal">
                    <span class="grand"> Grandtotal </span>
                    <span class="total-num">£340</span>
                  </div>
                </div>

                <button class="btn perv-btn" type="button" @click="e1 = 1">
                  <img src="/images/icons/svg/left-green-arrow.svg" alt />
                  <span>Previous</span>
                </button>
                <button class="btn" type="button" @click="e1 = 3">
                  <span>Next</span>
                </button>
              </v-stepper-content>
              <v-stepper-content step="3">
                <div class="payment">
                  <div class="payment-images">
                    <img src="/images/pay with card.png" alt="" />

                    <img src="/images/pay with paypal.png" alt="" />
                  </div>

                  <div class="row">
                    <div class="col-5">
                      <div class="form-group">
                        <label for="cardname">Cardholder's Name</label>
                        <input
                          type="cardname"
                          class="form-control"
                          id="cardname"
                        />
                      </div>
                    </div>
                    <div class="col-5">
                      <div class="form-group">
                        <label for="cardnum">Card number</label>
                        <input
                          type="cardnum"
                          class="form-control"
                          id="cardnum"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn" type="button" @click="e1 = 4">
                  <span>Next</span>
                </button>
                <button class="btn perv-btn" type="button" @click="e1 = 2">
                  <img src="/images/icons/svg/left-green-arrow.svg" alt />
                  <span>Previous</span>
                </button>
              </v-stepper-content>
              <v-stepper-content step="4">
                <div class="sucess">
                  <img src="/images/logo.png" alt="">
                </div>




                <button class="btn perv-btn" type="button" @click="e1 = 1">
                  <img src="/images/icons/svg/left-green-arrow.svg" alt />
                  <span>Previous</span>
                </button>
              </v-stepper-content>
            </v-stepper-items>
          </form>
        </v-stepper>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>
