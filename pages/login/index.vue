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

              <div class="login-form">
                <form>
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
                      id="myInput"
                    />
                    <div class="icon" @click="PasswordFunction()">
                      <img
                        v-if="!passwordisshow"
                        src="/images/icons/svg/icon-confirm-password.svg"
                        alt=""
                      />
                      <img
                        v-if="passwordisshow"
                        src="/images/icons/svg/icon-password.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <span class="forget-link"
                    ><nuxt-link to="forget-password">
                      Forgot Password?</nuxt-link
                    ></span
                  >
                  <button>Login</button>
                </form>
                <p>Don't have an account?</p>
                <span class="sign-link">
                  <nuxt-link to="sign-up">Sign Up</nuxt-link></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      passwordisshow: false,
    };
  },
  methods: {
    PasswordFunction() {
      let x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
        this.passwordisshow = true
      } else {
        x.type = "password";
        this.passwordisshow = false
      }
    },
  },
};
</script>