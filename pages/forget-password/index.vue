<template>
    <section class="forget-password">
<div class="container">
    <div class="forget-page">
    <div class="row">
        <div class="col-6">
            <div class="image">
                <img src="/images/forget-password.png" alt="">
            </div>
        </div>
        <div class="col-6">
            <div class="forget-content">
                <h3>Forgot Password</h3>
                <p>Enter the mobile number you used to TBDM</p>
                <div class="forget-form">
                  <div class="form-group">
                  <label for="mobilenum">Mobile Number</label>
                  <input
                    type="cardname"
                    class="form-control form-control-lg"
                    id="mobilenum"
                  />
                </div>
                  <button>Verify</button>
                     <p>Don't have any account?</p>
                   <nuxt-link to="sign-up" class="sign-link">Sign Up</nuxt-link>

            </div>
        </div>
        </div>
</div>
    </div>
</div> 
    </section>
</template>