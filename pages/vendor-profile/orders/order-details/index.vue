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
                  <img
                    src="/images/icons/svg/icon_arrow.svg"
                    class="icon-arrow"
                    alt=""
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/wishlist">
                  <img src="/images/icons/svg/icon-Heart.svg" alt="" />
                  <span>Wishlist</span>
                  <img
                    src="/images/icons/svg/icon_arrow.svg"
                    class="icon-arrow"
                    alt=""
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/orders">
                  <img src="/images/icons/svg/icon-orders.svg" alt="" />
                  <span>Orders</span>
                  <img
                    src="/images/icons/svg/icon_arrow.svg"
                    class="icon-arrow"
                    alt=""
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/reservation">
                  <img src="/images/icons/svg/icon doctor.svg" alt="" />
                  <span>Reservation </span>
                  <img
                    src="/images/icons/svg/icon_arrow.svg"
                    class="icon-arrow"
                    alt=""
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/subscribe-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>Subscribed Auctions</span>
                  <img
                    src="/images/icons/svg/icon_arrow.svg"
                    class="icon-arrow"
                    alt=""
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/vendor-profile/my-auction">
                  <img src="/images/icons/svg/icon-auction.svg" alt="" />
                  <span>My Auctions</span>
                  <img
                    src="/images/icons/svg/icon_arrow.svg"
                    class="icon-arrow"
                    alt=""
                  />
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
                  <img src="/images/icons/svg/icon-cancel.svg" alt="" />
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
                          <p>Recipient: </p>
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
                          <p  class="paragraph">Card end with **** 6987</p>
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
            <!-- <div class="shipment-details">
              <h3>Shipment Details</h3>
              <div class="timeline">
                 <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Timeline</h6>
                    <div id="content">
                        <ul class="timeline">
                            <li class="event" data-date="12:30 - 1:00pm">
                                <h3>Registration</h3>
                                <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                            </li>
                            <li class="event" data-date="2:30 - 4:00pm">
                                <h3>Opening Ceremony</h3>
                                <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP &amp; Busta Rhymes as an opening show.</p>
                            </li>
                            <li class="event" data-date="5:00 - 8:00pm">
                                <h3>Main Event</h3>
                                <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                            </li>
                            <li class="event" data-date="8:30 - 9:30pm">
                                <h3>Closing Ceremony</h3>
                                <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
              </div>
               </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
