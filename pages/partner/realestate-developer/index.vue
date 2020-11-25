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
        <div class="partner-form">
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
              <label for="CommercialPhone">Commercial Phone</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="CommercialPhone"
              />
            </div>
          </div>
          <div class="form-row justify-content-between">
            <div class="form-group col-md-5">
              <label for="email">Email</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="email"
              />
            </div>
            <div class="form-group col-md-5">
              <label for="CommercialName">Commercial Name</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="CommercialName"
              />
            </div>
          </div>
          <div class="form-row justify-content-between">
            <div class="form-group col-md-5">
              <label for="country">Country</label>
              <select id="country" class="form-control form-control-lg">
                <option>Egypt</option>
                <option>syria</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="city">City</label>
              <select id="city" class="form-control form-control-lg">
                <option>Egypt</option>
                <option>syria</option>
              </select>
            </div>
          </div>
          <div class="form-row justify-content-between">
            <div class="form-group col-md-5">
              <label for="governorate">Governorate</label>
              <select id="governorate" class="form-control form-control-lg">
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
            <button class="btn" type="button">
              <span>Creat Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>