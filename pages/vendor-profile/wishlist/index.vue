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
          <div class="user-wishlist">
            <div class="wishlist-head">
              <h3>Wishlist</h3>
            </div>
            <div class="wishlist-items">
              <div class="row no-gutters">
                <div class="col-md-6">
                  <span>Item</span>
                </div>

                <div class="col-3"><span> Price</span></div>
                <div class="col-3"></div>
              </div>
            </div>
            <div class="wishlist-content" v-for="wishlist in 4" :key="wishlist">
              <div class="row counter no-gutters">
                <div class="col-6">
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

                <!-- <div class="col-3 text-center">
                  <div class="control">
                    <span>
                      <img src="/images/icons/svg/minus-black.svg" alt="" />
                    </span>
                    <span>2</span>
                    <span>
                      <img src="/images/icons/svg/plus-black.svg" alt="" />
                    </span>
                  </div>
                </div> -->

                <div class="col-3">
                  <p class="bold2">£21</p>
                </div>
                <div class="col-3">
                  <button>Move to Cart</button>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
