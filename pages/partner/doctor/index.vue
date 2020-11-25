<template>
  <div class="doctor-register">
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
                     
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
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
                      <label for="specialization">Select Specialization</label>
                      <select
                        id="specialization"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="degree">Select Degree</label>
                      <select id="degree" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="homeVisit">Home Visit</label>
                      <select
                        id="homeVisit"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="phone">Commercial Name</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="phone"
                      
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
                      <select
                        id="governorate"
                        class="form-control form-control-lg"
                      >
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
                <div class="doctor-business">
                  <b-tabs pills align="center">
                    <b-tab active>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img
                                src="/images/icons/svg/hospital.svg"
                                alt=""
                              />
                            </div>
                            <p>
                              Hospital / <br />
                              Medical Center
                            </p>
                          </div>
                        </div>
                      </template>

                      <div class="hospital">

                        <div class="hospital-info">
                            <div class="head">
                                <h3>Hospital Info</h3>
                            </div>
                          <div class="partner-form">
                            <div class="form-row justify-content-between">
                              <div class="form-group col-md-5">
                                <label for="name">Hospital Name</label>
                                <input
                                  type="text"
                                  class="form-control form-control-lg"
                                  id="name"
                                />
                              </div>
                              <div class="form-group col-md-5">
                                <label for="phone">Phone</label>
                                <input
                                  type="text"
                                  class="form-control form-control-lg"
                                  id="phone"
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
                                />
                              </div>
                              <div class="form-group col-md-5">
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
                            <div class="form-row justify-content-between">
                              <div class="form-group col-md-5">
                                <label for="city">City</label>
                                <select
                                  id="city"
                                  class="form-control form-control-lg"
                                >
                                  <option>Egypt</option>
                                  <option>syria</option>
                                </select>
                              </div>
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
                            </div>

                            <div class="form-row">
                              <div class="form-group col-12">
                                <label for="description">Description</label>
                                <textarea
                                  class="form-control"
                                  id="description"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div class="hospital-clinics" v-if="hospitalClinics && hospitalClinics.length > 0">
                            <div class="clinic" v-for="(clinic, index) in hospitalClinics" :key="index">
                                <div class="head" v-b-toggle="'collapse-' + index">
                                    <h3>{{ hospitalClinics[index].title }}</h3>
                                    <img src="/images/icons/svg/medical-bottom-arrow.svg" alt="">
                                </div>

                                <b-collapse :id="'collapse-' + index">
                                    <div class="clinic-info">
                                        <div class="partner-form">
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="clinicName">Clinic Name</label>
                                                    <input
                                                        v-model="hospitalClinics[index].title"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="clinicName"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">Phone</label>
                                                    <input
                                                        v-model="hospitalClinics[index].phone"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-12">
                                                    <div class="working-days">
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.saturday" id="saturday" type="checkbox">
                                                            <label for="saturday">Saturday</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.sunday" id="sunday" type="checkbox">
                                                            <label for="sunday">Sunday</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.monday" id="monday" type="checkbox">
                                                            <label for="monday">Monday</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.tuesday" id="tuesday" type="checkbox">
                                                            <label for="tuesday">Tuesday</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.wednesday" id="wednesday" type="checkbox">
                                                            <label for="wednesday">Wednesday</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.thursday" id="thursday" type="checkbox">
                                                            <label for="thursday">Thursday</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospitalClinics[index].workingDays.friday" id="friday" type="checkbox">
                                                            <label for="friday">Friday</label>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="address">Open In</label>
                                                    <b-form-timepicker v-model="hospitalClinics[index].openFrom" locale="en"></b-form-timepicker>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="address">Close In</label>
                                                    <b-form-timepicker v-model="hospitalClinics[index].openTo" locale="en"></b-form-timepicker>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="regular">Regular Price</label>
                                                    <input
                                                        v-model="hospitalClinics[index].regularPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="regular"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="urgent">Urgent Price</label>
                                                    <input
                                                        v-model="hospitalClinics[index].urgentPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="urgent"
                                                    />
                                                </div>
                                            </div>
                                            <div class="action-btns">
                                                <button type="button" @click="removeHospitalClinic(index)" class="btn remove-clinic">Remove</button>
                                                <button type="button" @click="saveHospitalClinic(index)" v-b-toggle="'collapse-' + index" class="btn save-clinic">Save</button>
                                            </div>

                                        </div>
                                    </div>
                                </b-collapse>

                            </div>
                        </div>

                        <div class="add-clinic">
                            <div class="head">
                                <h3>Add Hospital's Clinics</h3>
                            </div>
                            <div class="partner-form">
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="clinicName">Clinic Name</label>
                                        <input
                                            v-model="hospitalClinic.title"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="clinicName"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">Phone</label>
                                        <input
                                            v-model="hospitalClinic.phone"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="phone"
                                      
                                        />
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-12">
                                        <div class="working-days">
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.saturday" id="saturday" type="checkbox">
                                                <label for="saturday">Saturday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.sunday" id="sunday" type="checkbox">
                                                <label for="sunday">Sunday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.monday" id="monday" type="checkbox">
                                                <label for="monday">Monday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.tuesday" id="tuesday" type="checkbox">
                                                <label for="tuesday">Tuesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.wednesday" id="wednesday" type="checkbox">
                                                <label for="wednesday">Wednesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.thursday" id="thursday" type="checkbox">
                                                <label for="thursday">Thursday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.friday" id="friday" type="checkbox">
                                                <label for="friday">Friday</label>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="address">Open In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openFrom" locale="en"></b-form-timepicker>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="address">Close In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openTo" locale="en"></b-form-timepicker>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="regular">Regular Price</label>
                                        <input
                                            v-model="hospitalClinic.regularPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="regular"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="urgent">Urgent Price</label>
                                        <input
                                            v-model="hospitalClinic.urgentPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="urgent"
                                        />
                                    </div>
                                </div>
                                <div class="add-btn">
                                    <button type="button" @click="addHospitalClinic" class="btn">+ Add Another Clinic</button>
                                </div>

                            </div>
                        </div>

                      </div>
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img src="/images/icons/svg/clinic.svg" alt="" />
                            </div>
                            <p>
                              Private <br />
                              Clinic
                            </p>
                          </div>
                        </div>
                      </template>
                     <!-- clinic -->
                         <div class="add-private-clinic">
                            <div class="head">
                                <h3>Clinic Info</h3>
                            </div>
                            <div class="partner-form">
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="clinicName">Clinic Name</label>
                                        <input
                                            v-model="hospitalClinic.title"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="clinicName"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">Phone</label>
                                        <input
                                            v-model="hospitalClinic.phone"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="phone"
                                          
                                        />
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-12">
                                        <div class="working-days">
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.saturday" id="saturday" type="checkbox">
                                                <label for="saturday">Saturday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.sunday" id="sunday" type="checkbox">
                                                <label for="sunday">Sunday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.monday" id="monday" type="checkbox">
                                                <label for="monday">Monday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.tuesday" id="tuesday" type="checkbox">
                                                <label for="tuesday">Tuesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.wednesday" id="wednesday" type="checkbox">
                                                <label for="wednesday">Wednesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.thursday" id="thursday" type="checkbox">
                                                <label for="thursday">Thursday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.friday" id="friday" type="checkbox">
                                                <label for="friday">Friday</label>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="address">Open In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openFrom" locale="en"></b-form-timepicker>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="address">Close In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openTo" locale="en"></b-form-timepicker>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="regular">Regular Price</label>
                                        <input
                                            v-model="hospitalClinic.regularPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="regular"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="urgent">Urgent Price</label>
                                        <input
                                            v-model="hospitalClinic.urgentPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="urgent"
                                        />
                                    </div>
                                </div>
                                  <div class="form-row justify-content-between">
                                      <div class="form-group col-md-6">
                      <label for="governorate">Country</label>
                      <select
                        id="governorate"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="city">City</label>
                      <select id="city" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  
                  </div>
                       <div class="form-row justify-content-between">
                                      <div class="form-group col-md-6">
                      <label for="governorate">Governorate</label>
                      <select
                        id="governorate"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                
                  
                  </div>
               
               
                                <div class="add-btn">
                                    <button type="button" @click="addHospitalClinic" class="btn">+ Add Another Clinic</button>
                                </div>

                            </div>
                        </div>
                       
                        

                   
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img
                                src="/images/icons/svg/laboratory.svg"
                                alt=""
                              />
                            </div>
                            <p>Laboratory</p>
                          </div>
                        </div>
                      </template>
                       
                         <div class="add-private-clinic">
                            <div class="head">
                                <h3>Laboratory Info</h3>
                            </div>
                            <div class="partner-form">
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="clinicName">Clinic Name</label>
                                        <input
                                            v-model="hospitalClinic.title"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="clinicName"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">Phone</label>
                                        <input
                                            v-model="hospitalClinic.phone"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="phone"
                                          
                                        />
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-12">
                                        <div class="working-days">
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.saturday" id="saturday" type="checkbox">
                                                <label for="saturday">Saturday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.sunday" id="sunday" type="checkbox">
                                                <label for="sunday">Sunday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.monday" id="monday" type="checkbox">
                                                <label for="monday">Monday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.tuesday" id="tuesday" type="checkbox">
                                                <label for="tuesday">Tuesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.wednesday" id="wednesday" type="checkbox">
                                                <label for="wednesday">Wednesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.thursday" id="thursday" type="checkbox">
                                                <label for="thursday">Thursday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.friday" id="friday" type="checkbox">
                                                <label for="friday">Friday</label>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="address">Open In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openFrom" locale="en"></b-form-timepicker>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="address">Close In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openTo" locale="en"></b-form-timepicker>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="regular">Regular Price</label>
                                        <input
                                            v-model="hospitalClinic.regularPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="regular"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="urgent">Urgent Price</label>
                                        <input
                                            v-model="hospitalClinic.urgentPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="urgent"
                                        />
                                    </div>
                                </div>
                                <div class="add-btn">
                                    <button type="button" @click="addHospitalClinic" class="btn">+ Add Another Clinic</button>
                                </div>

                            </div>
                        </div>
    
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img src="/images/icons/svg/spa.svg" alt="" />
                            </div>
                            <p>SPA</p>
                          </div>
                        </div>
                      </template>
 <div class="add-private-clinic">
                            <div class="head">
                                <h3>SPA Info</h3>
                            </div>
                            <div class="partner-form">
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="clinicName">Clinic Name</label>
                                        <input
                                            v-model="hospitalClinic.title"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="clinicName"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="phone">Phone</label>
                                        <input
                                            v-model="hospitalClinic.phone"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="phone"
                                    
                                        />
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-12">
                                        <div class="working-days">
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.saturday" id="saturday" type="checkbox">
                                                <label for="saturday">Saturday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.sunday" id="sunday" type="checkbox">
                                                <label for="sunday">Sunday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.monday" id="monday" type="checkbox">
                                                <label for="monday">Monday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.tuesday" id="tuesday" type="checkbox">
                                                <label for="tuesday">Tuesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.wednesday" id="wednesday" type="checkbox">
                                                <label for="wednesday">Wednesday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.thursday" id="thursday" type="checkbox">
                                                <label for="thursday">Thursday</label>
                                                <span></span>
                                            </div>
                                            <div class="chiller_cb">
                                                <input v-model="hospitalClinic.workingDays.friday" id="friday" type="checkbox">
                                                <label for="friday">Friday</label>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="address">Open In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openFrom" locale="en"></b-form-timepicker>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="address">Close In</label>
                                        <b-form-timepicker v-model="hospitalClinic.openTo" locale="en"></b-form-timepicker>
                                    </div>
                                </div>
                                <div class="form-row justify-content-between">
                                    <div class="form-group col-md-6">
                                        <label for="regular">Regular Price</label>
                                        <input
                                            v-model="hospitalClinic.regularPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="regular"
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="urgent">Urgent Price</label>
                                        <input
                                            v-model="hospitalClinic.urgentPrice"
                                            type="text"
                                            class="form-control form-control-lg"
                                            id="urgent"
                                        />
                                    </div>
                                </div>
                                <div class="add-btn">
                                    <button type="button" @click="addHospitalClinic" class="btn">+ Add Another Clinic</button>
                                </div>

                            </div>
                        </div>
                    </b-tab>
                  </b-tabs>

                    <!-- Because action-btns styles included in partner-form -->
                    <div class="partner-form">
                        <div class="action-btns">
                            <button
                            class="btn perv-btn"
                            type="button"
                            @click="e1 = 1"
                            >
                            <img
                                src="/images/icons/svg/left-green-arrow.svg"
                                alt=""
                            />
                            <span>Previous</span>
                            </button>
                            <button
                            class="btn create-btn"
                            type="button"
                            @click="e1 = 1"
                            >
                            <span>Create Account</span>
                            </button>
                        </div>
                    </div>

                </div>
              </v-stepper-content>
            </v-stepper-items>
          </form>
        </v-stepper>
      </div>
    </div>
  </div>
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
      hospitalClinic: {
        title: "",
        phone: "",
        workingDays: {
            saturday: false,
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false
        },
        openFrom: "",
        openTo: "",
        regularPrice: "",
        urgentPrice: ""
      },
      hospitalClinics: []
    };
  },
  methods: {
    addHospitalClinic() {
        this.hospitalClinics.push({
            ...this.hospitalClinic,
            workingDays: { ...this.hospitalClinic.workingDays }
        });
        console.log('hospital clinics >>', this.hospitalClinics);
    },
    saveHospitalClinic(index) {
        console.log('saved');
    },
    removeHospitalClinic(index) {
        this.hospitalClinics.splice(index, 1);
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
