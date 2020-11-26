<template>
  <section class="vendor-profile">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="sidebar">
            <div class="sidupgrade">
              <h3>My Profile</h3>
              <div class="upgrade">
                <img src="/images/icons/svg/icon-crown.svg" alt="" />
                <span>Upgrade to VIP</span>
              </div>
            </div>

            <div class="sidebar-head">
              <div class="profile-pic">
                <img src="/images/person.jpeg" alt="" />
              </div>
              <div class="profile-name">
                <span class="name">Tom Hanks</span>
                <div class="upload-photo">
                  <input
                    class="input-file"
                    type="file"
                    id="file"
                    @change="onFileSelected($event)"
                  />
                  <label for="file" class="label-file">Upload Photo</label>
                </div>
              </div>
            </div>
 <ul>
              <li>
                <nuxt-link to="/vendor-profile">
                  <img src="/images/icons/svg/icon-user.svg" alt="" />
                  <span>Account Info</span>
                   <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt="" />
                </nuxt-link>
               
              </li>
              <li>
                <nuxt-link to="/vendor-profile/wishlist">
                  <img src="/images/icons/svg/icon-Heart.svg" alt="" />
                  <span>Wishlist</span>
                   <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt="" />
                </nuxt-link>
               
              </li>
              <li>
                <nuxt-link to="/vendor-profile/orders">
                  <img src="/images/icons/svg/icon-orders.svg" alt="" />
                  <span>Orders</span>
                   <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt="" />
                </nuxt-link>
               
              </li>
              <li>
                <nuxt-link to="/vendor-profile/reservation">
                  <img src="/images/icons/svg/icon doctor.svg" alt="" />
                  <span>Reservation </span>
                    <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt="" />
                </nuxt-link>
              
              </li>
              <li>
                <nuxt-link to="/vendor-profile/subscribe-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>Subscribed Auctions</span>
                   <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt="" />
                </nuxt-link>
               
              </li>
              <li>
                <nuxt-link to="/vendor-profile/my-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>My Auctions</span>
                    <img src="/images/icons/svg/icon_arrow.svg" class="icon-arrow" alt="" />
                </nuxt-link>
              
              </li>
            </ul>

            <button>Log out</button>
          </div>
        </div>
        <div class="col-8">
          <div class="user-orders">
            <h3>Orders</h3>
            <div class="order-details" v-for="orders in 2" :key="orders">
              <div class="row">
                <div class="col-9">
                  <div class="order-discription">
                    <div class="row">
                      <div class="col-5">
                        <span>Order placed on:</span>
                      </div>
                      <div class="col-7">
                        <p>Apr. 4, 2020 </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <span>Order ID:</span>
                      </div>
                      <div class="col-7">
                        <p>4984651984 </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <span>Recipient: </span>
                      </div>
                      <div class="col-7">
                        <p>Tom Hanks </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <span>Payment method:</span>
                      </div>
                      <div class="col-7">
                        <p class="paragraph">Card end with **** 6987</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div class="col-3">
                    <div class="order-total">
                      
                    <p>Total</p>
                    <span>20,000 EGP</span>
                  
                  
                    <nuxt-link to="/vendor-profile/orders/order-details">
                     <span class="order-btn">Order Details</span> </nuxt-link>
                           
                   
                  </div>
                </div>
              </div>
            </div>
           
          
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
