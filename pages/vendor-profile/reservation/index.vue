<template>
  <section class="vendor-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-12">
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
                <img src="/images/vendor.png" alt="" />
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
        <div class="col-md-8 col-12">
          <div class="user-reversation">
            <h3>Reservation</h3>
            <div class="reversation-head">
              <div class="row no-gutters">
                <div class="col-3">Name</div>
                <div class="col-3">Date</div>
                <div class="col-2">Type</div>
                <div class="col-2">Cost</div>
                <div class="col-2"></div>
              </div>
            </div>
            <div class="reversation-details"  v-for="reveration in 4" :key="reveration">
              <div class="row no-gutters">
                <div class="col-3">
                  <div class="reversation-name">
                    <div class="image">
                      <img src="/images/person.jpeg" alt="" />
                    </div>
                    <span class="name">Tom Hanks</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="reversation-date">
                    <span class="date">Apr 4,2020</span>
                    <span class="time">23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <div class="reveration-types">
                    <span class="jop-type">Doctor</span>
                    <span class="type">Destines</span>
                  </div>
                </div>
                <div class="col-2">
                  <div class="reversation-cost">
                    <span>54,0000 EGP</span>
                  </div>
                </div>
                <div class="col-2">
                  <div class="cancel">
                  <img src="/images/icons/svg/icon-cancel.svg" alt="">
                  <span> Cancel </span>
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
