<template>
  <section class="sing-up">
    <div class="container">
      <div class="sign-page">
        <div class="row">
          <div class="col-6">
            <div class="images">
                <img src="/images/login-pic.png" alt="">
                <ul>
                    <li>
                        <a href="">
                            Sign Up with Facebook
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Sign Up with Google
                        </a>
                    </li>
                </ul>
            </div>
          </div>
          <div class="col-6">
            <div class="sign-content">
              <h3>Welcome,</h3>
              <p>Please complete the following date to continue</p>
              <div class="sign-form">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label for="firstname">First Name</label>
                      <input type="text" class="form-control form-control-lg" id="firstname" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="lastname">Last Name</label>
                      <input type="text" class="form-control form-control-lg" id="lastname" />
                    </div>
                  </div>
                </div>
                 <div class="form-group">
                      <label for="mobilenum">Mobile Number</label>
                      <input type="text" class="form-control form-control-lg" id="mobilenum" />
                    </div>
                     <div class="form-group">
                      <label for="createpass">Create Password</label>
                      <input type="password" class="form-control form-control-lg" id="createpass" />
                        <img src="/images/icons/svg/icon-confirm-password.svg" alt="" />
                    </div>
                     <div class="form-group">
                      <label for="confirmpass">Confirm Password</label>
                      <input type="password" class="form-control form-control-lg" id="confirmpass" />
                        <img src="/images/icons/svg/icon-confirm-password.svg" alt="" />
                    </div>
                       <button>Sign Up</button>
                   <p>Already have an account?</p>
                   <nuxt-link to="login" class="sign-link">Sign in</nuxt-link>
              </div>
           

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>