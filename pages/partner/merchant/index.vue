<template>
  <section class="merchant-register">
    <div class="container">
      <div class="partner-list">
        <h3 class="text-center">Become a Partner</h3>

        <div class="all-partner">
          <div class="service">
            <nuxt-link to="/partner/merchant">
              <div class="service-img">
                <img src="/images/icons/svg/shop.svg" alt="" />
              </div>
              <p>Merchant</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link to="/partner/doctor">
              <div class="service-img">
                <img src="/images/icons/svg/doctor.svg" alt="" />
              </div>
              <p>Doctor</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link to="/partner/profession">
              <div class="service-img">
                <img src="/images/icons/svg/carpenter.svg" alt="" />
              </div>
              <p>Profession</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link to="/partner/driver">
              <div class="service-img">
                <img src="/images/icons/svg/driver.svg" alt="" />
              </div>
              <p>Driver</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link to="/partner/realestate-developer">
              <div class="service-img">
                <img src="/images/icons/svg/dog-house.svg" alt="" />
              </div>
              <p>Realestate Developer</p>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="register">
        <v-stepper v-model="e1" alt-labels>
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Personal Info
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Merchant Info
            </v-stepper-step>

            <!-- <v-divider></v-divider> -->

            <!-- <v-stepper-step step="3">
              Name of step 3
            </v-stepper-step> -->
          </v-stepper-header>

          <form @submit.prevent="">
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="partner-form">
                  <div class="profile-img text-center">
                    <img :src="image" alt="" />
                    <div class="form-group">
                      <label for="profile">Upload Photo</label>
                      <input
                        type="file"
                        class="form-control"
                        id="profile"
                        @change="onImagePicked($event)"
                        hidden
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="firstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="lastName">Last Name</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="phone">Personal Phone</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="phone"
                        placeholder="Personal Phone"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="country">Country</label>
                      <select id="country" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="city">City</label>
                      <select id="city" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="governorate">Governorate</label>
                      <select id="governorate" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="password"
                        
                      />
                         <img src="/images/icons/svg/icon-password.svg" alt="" />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="confirmPassword"
                    
                      />
                          <img src="/images/icons/svg/icon-confirm-password.svg" alt="" />
                    </div>
                 
                  </div>

                  <div class="btn-next">
                    <button class="btn" type="button" @click="e1 = 2">
                      <span>Next</span>
                      <img
                        src="/images/icons/svg/white-right-arrow.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2">

                <div class="partner-form">

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="commercial">Commercial Name</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="commercial"
                        placeholder="Commercial Name"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="category">Select Category</label>
                      <select id="category" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="commercialPhone">Commercial Phone</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="commercialPhone"
                        placeholder="Commercial Phone"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="hotline">Hotline</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="hotline"
                        placeholder="Hotline"
                      />
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="address"
                        placeholder="Address"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="confirmPassword">Delivery Status</label>
                      <select class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                        <label for="address">Open In</label>
                        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="address">Close In</label>
                        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-12">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" rows="4"></textarea>
                    </div>
                  </div>

                  <div class="action-btns">
                    <button class="btn perv-btn" type="button" @click="e1 = 1">
                      <img
                        src="/images/icons/svg/left-green-arrow.svg"
                        alt=""
                      />
                      <span>Previous</span>
                    </button>
                    <button class="btn create-btn" type="button" @click="e1 = 1">
                      <span>Create Account</span>
                    </button>
                  </div>
                </div>

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
    layout: 'withoutNavbar',
  data() {
    return {
      e1: 1,
      image:
        "https://orbitermag.com/wp-content/uploads/2017/03/default-user-image-300x300.png",
        value: ''
    };
  },
  methods: {
    onImagePicked(event) {
      console.log("picked");
      let file = event.target.files[0];

      if (file) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.image = fileReader.result;
          console.log("image >> ", this.image);
        });
        fileReader.readAsDataURL(file);
      }
    },
  },
};
</script>
