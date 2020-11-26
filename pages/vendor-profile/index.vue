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
                                <select
                                  id="country"
                                  class="form-control form-control-lg"
                                >
                                  <option>Egypt</option>
                                  <option>syria</option>
                                </select>
                              </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                                <label for="city">City</label>
                                <select
                                  id="city"
                                  class="form-control form-control-lg"
                                >
                                  <option>Cairo</option>
                                  <option>syria</option>
                                </select>
                              </div>
                <div class="form-group col-md-6">
                                <label for="region">Region</label>
                                <select
                                  id="region"
                                  class="form-control form-control-lg"
                                >
                                  <option>Nasr City</option>
                                  <option>syria</option>
                                </select>
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
