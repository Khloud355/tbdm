<template>
  <section class="vendor-profile">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="sidebar">
            <div class="sidupgrade">
            <h3>My Profile</h3>
            <div class="upgrade">
              <img src="/images/icons/svg/icon-crown.svg" alt="">
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
                <img src="/images/icons/svg/icon_arrow.svg" alt="">
              </li>
              <li>
                <nuxt-link to="/vendor-profile/wishlist">
                  <img src="/images/icons/svg/Heart.svg" alt="" />
                  <span>Wishlist</span>
                </nuxt-link>
                 <img src="/images/icons/svg/icon_arrow.svg" alt="">
              </li>
              <li>
                <nuxt-link to="/vendor-profile/orders">
                  <img src="/images/icons/svg/icon-orders.svg" alt="" />
                  <span>Orders</span>
                </nuxt-link>
                 <img src="/images/icons/svg/icon_arrow.svg" alt="">
              </li>
              <li>
                <nuxt-link to="/vendor-profile/reservation">
                  <img src="/images/icons/svg/icon doctor.svg" alt="" />
                  <span>Reservation </span>
                </nuxt-link>
                 <img src="/images/icons/svg/icon_arrow.svg" alt="">
              </li>
              <li>
                <nuxt-link to="/vendor-profile/subscibe-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>Subscribed Auctions</span>
                </nuxt-link>
                 <img src="/images/icons/svg/icon_arrow.svg" alt="">
              </li>
              <li>
                 <nuxt-link to="/vendor-profile/my-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>My Auctions</span>
                 </nuxt-link>
                 <img src="/images/icons/svg/icon_arrow.svg" alt="">
              </li>
            </ul>

            <button>Log Out</button>
          </div>
        </div>
        <div class="col-8">
     
          <div class="account-content">
            <div class="account-header">
              <h3>Account Info</h3>
              <button>Save Changes</button>
            </div>
            <div class="account-form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="firstname"
                  />
                </div>
           
                <div class="form-group col-md-6">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="lastname"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="email"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="mobile">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="mobile"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="password"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="country"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="city">City</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="city"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="region">Region</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="region"
                  />
                </div>
              </div>
               <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="addres">Address Details</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="addres"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
