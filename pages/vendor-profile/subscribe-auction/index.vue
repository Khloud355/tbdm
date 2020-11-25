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
                </nuxt-link>
                <img src="/images/icons/svg/icon_arrow.svg" alt="" />
              </li>
              <li>
                <nuxt-link to="/vendor-profile/wishlist">
                  <img src="/images/icons/svg/Heart.svg" alt="" />
                  <span>Wishlist</span>
                </nuxt-link>
                <img src="/images/icons/svg/icon_arrow.svg" alt="" />
              </li>
              <li>
                <nuxt-link to="/vendor-profile/orders">
                  <img src="/images/icons/svg/icon-orders.svg" alt="" />
                  <span>Orders</span>
                </nuxt-link>
                <img src="/images/icons/svg/icon_arrow.svg" alt="" />
              </li>
              <li>
                <nuxt-link to="/vendor-profile/reservation">
                  <img src="/images/icons/svg/icon doctor.svg" alt="" />
                  <span>Reservation </span>
                </nuxt-link>
                <img src="/images/icons/svg/icon_arrow.svg" alt="" />
              </li>
              <li>
                <nuxt-link to="/vendor-profile/subscibe-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>Subscribed Auctions</span>
                </nuxt-link>
                <img src="/images/icons/svg/icon_arrow.svg" alt="" />
              </li>
              <li>
                <nuxt-link to="/vendor-profile/my-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>My Auctions</span>
                </nuxt-link>
                <img src="/images/icons/svg/icon_arrow.svg" alt="" />
              </li>
            </ul>

            <button>Log Out</button>
          </div>
        </div>
        <div class="col-8">
          <div class="subscribe-auction">
            <h3>Subscribed Auctions</h3>
            <div class="subscribe-head">
              <div class="row no-gutters">
                <div class="col-1">
                  <span>Auction </span>
                </div>
                <div class="col-3 text-center">
                  <span>End Date </span>
                </div>
                <div class="col-2">
                  <span>Open Price </span>
                </div>
                <div class="col-4 text-center">
                  <span>You Pay & Date</span>
                </div>
                <div class="col-2 text-center">
                  <span>Total</span>
                </div>
              </div>
            </div>
            <div class="subscribe-body" v-for="auction in 4" :key="auction">
              <div class="row no-gutters">
                <div class="col-1">
                  <span class="auction">Cammels</span>
                </div>
                <div class="col-3 text-center">
                  <div class="end-date">
                    <span class="date">Apr 4, 2020 </span>
                    <span class="time">23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="price">2000 EGP</span>
                </div>
                <div class="col-4">
                  <div class="pay-time text-center">
                    <span class="pay">400000 EGP</span>
                    <span class="date-time">Apr 4, 2020 - 23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="total">90,000 EGP</span>
                </div>
              </div>
            </div>
            <!-- <div class="subscribe-body">
              <div class="row no-gutters">
                <div class="col-1">
                  <span class="auction">Cammels</span>
                </div>
                <div class="col-3 text-center">
                  <div class="end-date">
                    <span class="date">Apr 4, 2020 </span>
                    <span class="time">23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="price">2000 EGP</span>
                </div>
                <div class="col-4">
                  <div class="pay-time">
                    <span class="pay">400000 EGP</span>
                    <span class="date-time">Apr 4, 2020 - 23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="total">90,000 EGP</span>
                </div>
              </div>
            </div> -->
            <!-- <div class="subscribe-body">
              <div class="row no-gutters">
                <div class="col-1">
                  <span class="auction">Cammels</span>
                </div>
                <div class="col-3 text-center">
                  <div class="end-date">
                    <span class="date">Apr 4, 2020 </span>
                    <span class="time">23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="price">2000 EGP</span>
                </div>
                <div class="col-4">
                  <div class="pay-time text-center">
                    <span class="pay">400000 EGP</span>
                    <span class="date-time">Apr 4, 2020 - 23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="total">90,000 EGP</span>
                </div>
              </div>
            </div> -->
            <!-- <div class="subscribe-body">
              <div class="row no-gutters">
                <div class="col-1">
                  <span class="auction">Cammels</span>
                </div>
                <div class="col-3 text-center">
                  <div class="end-date">
                    <span class="date">Apr 4, 2020 </span>
                    <span class="time">23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="price">2000 EGP</span>
                </div>
                <div class="col-4">
                  <div class="pay-time text-center">
                    <span class="pay">400000 EGP</span>
                    <span class="date-time">Apr 4, 2020 - 23:00 PM</span>
                  </div>
                </div>
                <div class="col-2">
                  <span class="total">90,000 EGP</span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
