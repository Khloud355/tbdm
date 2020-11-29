<template>
  <section class="vendor-profile">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="sidebar">
            <div class="sidupgrade">
              <h3>My Profile</h3>
              <div class="upgrade">
                <img src="/images/icons/svg/icon-crown.svg" alt />
                <span>Upgrade to VIP</span>
              </div>
            </div>

            <div class="sidebar-head">
              <div class="profile-pic">
                <img src="/images/person.jpeg" alt />
              </div>
              <div class="profile-name">
                <span class="name">Tom Hanks</span>
                <div class="upload-photo">
                  <input class="input-file" type="file" id="file" @change="onFileSelected($event)" />
                  <label for="file" class="label-file">Upload Photo</label>
                </div>
              </div>
            </div>

            <ul>
              <li>
                <nuxt-link to="/vendor-profile">
                  <img src="/images/icons/svg/icon-user.svg" alt />
                  <span>Account Info</span>
                  <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/wishlist">
                  <img src="/images/icons/svg/icon-Heart.svg" alt />
                  <span>Wishlist</span>
                  <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/orders">
                  <img src="/images/icons/svg/icon-orders.svg" alt />
                  <span>Orders</span>
                  <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/reservation">
                  <img src="/images/icons/svg/icon doctor.svg" alt />
                  <span>Reservation</span>
                  <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/subscribe-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt />
                  <span>Subscribed Auctions</span>
                  <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/my-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt />
                  <span>My Auctions</span>
                  <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt />
                </nuxt-link>
              </li>
            </ul>

            <button>Log out</button>
          </div>
        </div>
        <div class="col-8">
          <div class="order-detail">
            <div class="order-details-head">
              <div class="order-details-header">
                <h3>Order Details</h3>
                <button class="cancel">
                  <img src="/images/icons/svg/icon-cancel.svg" alt />
                  <span>Cancel</span>
                </button>
              </div>
              <div class="details">
                <div class="row">
                  <div class="col-9">
                    <div class="order-discrip">
                      <div class="row">
                        <div class="col-5">
                          <p>Order placed on:</p>
                        </div>
                        <div class="col-7">
                          <p class="paragraph">Apr. 4, 2020</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-5">
                          <p>Order ID:</p>
                        </div>
                        <div class="col-7">
                          <p class="paragraph">4984651984</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-5">
                          <p>Recipient:</p>
                        </div>
                        <div class="col-7">
                          <p class="paragraph">Tom Hanks</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-5">
                          <p>Payment method:</p>
                        </div>
                        <div class="col-7">
                          <p class="paragraph">Card end with **** 6987</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-3">
                    <div class="order-total">
                      <p class="total">Total</p>
                      <span>20,000 EGP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
           
              
=======
            <div class="shipment-details">
              <h3>Shipment Details</h3>
              <ol>
                <li>
                  <span class="point1">
                    <span class="circle1"></span>

                  </span>
                   <p>Order placed</p>
                  <!-- <div class="data">
               
                  <span>11 May, 2020</span>
                  </div> -->
                </li>
                <li>
                  <span class="point2"></span>
                </li>
                <li>
                  <span class="point3"></span>
                  <!-- <div class="data">

                     <p>Arrived In</p>
                  <span>26 May, 2020</span>
                  </div> -->
                
                </li>
                      <li>
                  <span class="point4"></span>
                    <!-- <p>Arrived In</p> -->
               
                </li>
              </ol>
              <ol>
                <li class="line">
                  <span class="point11">
                    <span class="circle11"></span>
                  </span>
                </li>
                <li>
                  <span class="point22"></span>
                </li>
                <li>
                  <span class="point33"></span>
                </li>
                      <li>
                  <span class="point44"></span>
                </li>
              </ol>
              <ol>
                <li>
                  <span class="point111">
                    <!-- <span class="circle111"></span> -->
                  </span>
                </li>
                <li>
                  <span class="point222"></span>
                </li>
                <li>
                  <span class="point333"></span>
                </li>
                      <li>
                  <span class="point444"></span>
                </li>
            
              </ol>
              <ol>
                <li>
                  <span class="point1111">
                    <!-- <span class="circle111"></span> -->
                  </span>
                </li>
                <li>
                  <span class="point2222"></span>
                </li>
                <li>
                  <span class="point3333"></span>
                </li>
                  <li>
                  <span class="point4444"></span>
                </li>
              </ol>
               <ol>
                <li>
                  <span class="point11111">
                   
                  </span>
                </li>
                <li>
                  <span class="point22222"></span>
                </li>
                <li>
                  <span class="point33333"></span>
                </li>
                  <li>
                  <span class="point44444"></span>
                </li>
              </ol>
            </div>
            <div class="product-details">
              <h3>Product Details</h3>
              <div class="row">
                <div class="col-6">
                  <div>
                    <b-card no-body class="overflow-hidden">
                      <b-row no-gutters>
                        <b-col md="4">
                          <b-card-img src="/images/apple-watch.png" alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                          <b-card-body>
                            <p class="name">Apple Watch Series 4 GPS</p>
                            <p class="seller">
                              <span>Seller:</span>
                              <span>Tom Hanks</span>
                            </p>
                            <p class="price">$500.00</p>
                            <p class="quntity">
                              <span>Qty:</span>
                              <span>2</span>
                            </p>
                          </b-card-body>
                        </b-col>
                      </b-row>
                    </b-card>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <b-card no-body class="overflow-hidden">
                      <b-row no-gutters>
                        <b-col md="4">
                          <b-card-img src="/images/apple-watch.png" alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="8">
                          <b-card-body>
                            <b-card-text>
                              <p class="name">Apple Watch Series 4 GPS</p>
                              <p class="seller">
                                <span>Seller:</span>
                                <span>Tom Hanks</span>
                              </p>
                              <p class="price">$500.00</p>
                              <p class="quntity">
                                <span>Qty:</span>
                                <span>2</span>
                              </p>
                            </b-card-text>
                          </b-card-body>
                        </b-col>
                      </b-row>
                    </b-card>
                  </div>
                </div>
              </div>
            </div>
>>>>>>> 4bf6befb4eb5cde3e6ae340332614f35bc010143
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
