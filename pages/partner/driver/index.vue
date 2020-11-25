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
              Car Info
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
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="lastName">Last Name</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="lastName"
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
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="Commercial">License Number</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="Commercial"
                      />
                    </div>
                  </div>
                  <!-- <div class="form-row justify-content-between">
                        <div class="col-md-5">
                         <input
                    class="input-file"
                    type="file"
                    id="file"
                    @change="onFileSelected($event)"
                  />
                  <label for="file" class="label-file">Choose file</label>
                        </div>
                        <div class="col-md-5">
                              <input
                            class="input-file"
                    type="file"
                    id="file"
                    @change="onFileSelected($event)"
                  />
                  <label for="file" class="label-file">Choose file</label>
                        </div>
                    </div> -->
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="Country">Country</label>
                      <select id="Country" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="City">City</label>
                      <select id="City" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="governorate">Governorate</label>
                      <select
                        id="governorate"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="password"
                      />
                      <img src="/images/icons/svg/icon-password.svg" alt="" />
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="confirmPassword"
                      />
                      <img
                        src="/images/icons/svg/icon-confirm-password.svg"
                        alt=""
                      />
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
                      <label for="License">License Plate Characters (Optional)</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="License"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="LicensePlate">License Plate Numbers</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="LicensePlate"
                      />
                    </div>
                  </div>
                
                  <!-- <div class="form-row justify-content-between">
                        <div class="col-md-5">
                         <input
                    class="input-file"
                    type="file"
                    id="file"
                    @change="onFileSelected($event)"
                  />
                  <label for="file" class="label-file">Choose file</label>
                        </div>
                        <div class="col-md-5">
                              <input
                            class="input-file"
                    type="file"
                    id="file"
                    @change="onFileSelected($event)"
                  />
                  <label for="file" class="label-file">Choose file</label>
                        </div>
                    </div> -->
                    <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="Model">Car Model
</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="Model"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="Manufacture">Manufacture Year</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="Manufacture"
                      />
                    </div>
                  </div>
                 

                  <div class="btn-next">
                    <button class="btn">
                      <span>Creat Account</span>
                     
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
  layout: "withoutNavbar",
  data() {
    return {
      e1: 1,
      image:
        "https://orbitermag.com/wp-content/uploads/2017/03/default-user-image-300x300.png",
      value: "",
      ProfessionWorkshop: {
        title: "",
        phone: "",
        workingDays: {
          saturday: false,
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
        },
        openFrom: "",
        openTo: "",
        regularPrice: "",
        urgentPrice: "",
      },
      ProfessionWorkshops: [],
    };
  },
  methods: {
    addProfessionWorkshop() {
      this.ProfessionWorkshops.push({
        ...this.ProfessionWorkshop,
        workingDays: { ...this.ProfessionWorkshop.workingDays },
      });
      console.log("Profession Workshop >>", this.ProfessionWorkshops);
    },
    saveProfessionWorkshop(index) {
      console.log("saved");
    },
    removeProfessionWorkshop(index) {
      this.ProfessionWorkshops.splice(index, 1);
    },
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
