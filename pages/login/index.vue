<template>
  <section class="login">
    <div class="container">
      <div class="login-page">
        <div class="row">
          <div class="col-6">
            <div class="image">
              <img src="/images/login-pic.png" alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="login-content">
              <h3>Welcome Back,</h3>
              <p>Enter your mobile number you use for register in TBDM</p>
              <form>
              <div class="form">
                <div class="form-group">
                  <label for="mobilenum">Mobile Number</label>
                  <input
                    type="cardname"
                    class="form-control form-control-lg"
                    id="mobilenum"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="password"
                  />
                  <img src="/images/icons/svg/icon-confirm-password.svg" alt="" />
                </div>
                <nuxt-link to="forget-password" class="forget-link">
                   <span>Forgot Password?</span> </nuxt-link>
                   <button>Login</button>
                   </form>
                   <p>Don't have any account?</p>
                   <nuxt-link to="sign-up" class="sign-link">Sign Up</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    <!-- </div> -->
  </section>
</template>