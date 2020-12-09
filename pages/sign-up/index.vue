<template>
  <section class="sign-up">
    <div class="container">
      <div class="sign-page">
        <div class="row">
          <div class="col-md-6">
            <div class="left-side">
              <div class="images">
                <img src="/images/sign.png" alt="" />
              </div>
              <p>Create Account or</p>

              <ul>
                <li>
                  <a href="" class="facebook-link">
                    <div class="box">
                      <img src="/images/icons/svg/icon-facebook.svg" alt="" />
                    </div>
                    <span>Sign Up with Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="" class="google-link">
                    <div class="box">
                      <img src="/images/icons/svg/icon-google.svg" alt="" />
                    </div>
                    <span> Sign Up with Google</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="sign-content">
              <h3>Welcome,</h3>
              <p>Please complete the following date to continue</p>

              <div class="sign-form">
                <form>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="firstname"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="lastname"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="mobilenum">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="mobilenum"
                    />
                  </div>
                  <div class="form-group">
                    <label for="createpass">Create Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="myInput"
                    />
                    <div class="icon" @click="PasswordFunction('myInput')">
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
                  <div class="form-group">
                    <label for="confirmpass">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="myconfirmInput"
                    />
                    <div
                      class="icon"
                      @click="PasswordFunction('myconfirmInput')"
                    >
                      <img
                        v-if="!confirmPasswordIsShow"
                        src="/images/icons/svg/icon-confirm-password.svg"
                        alt=""
                      />
                      <img
                        v-if="confirmPasswordIsShow"
                        src="/images/icons/svg/icon-password.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <button>Sign Up</button>
                </form>
                <p>Already have an account?</p>
                <span class="sign-link"
                  ><nuxt-link to="login">Sign in</nuxt-link></span
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
      confirmPasswordIsShow:false
      // confirmpasswordisshow: false,
    };
  },
  methods: {
    PasswordFunction(id) {
      let x = document.getElementById(id);
      if (x.type === "password") {
        x.type = "text";
        if(id == 'myInput') {
          this.passwordisshow = true;
        }
        if(id == 'myconfirmInput') {
            this.confirmPasswordIsShow = true
        }

      } else {
        x.type = "password";
        if(id == 'myInput') {
          this.passwordisshow = false;
        }
        if(id == 'myconfirmInput') {
            this.confirmPasswordIsShow = false
        }

      }
    },
  },
};
</script>