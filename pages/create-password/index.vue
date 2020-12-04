<template>
  <section class="create-password">
    <div class="container">
      <div class="password-page">
        <div class="row">
          <div class="col-6">
            <div class="image">
              <img src="/images/authentication.png" alt="" />
            </div>
          </div>
          <div class="col-6">
            <div class="password-content">
              <h3>Create New Password</h3>
              <p>
                Use at least 8 characters a combination of numbers and letters
                is best
              </p>
              <div class="password-form">
                <div class="form-group">
                  <label for="newpass">New Password</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="newpass"
                  />
                  <img
                    src="/images/icons/svg/icon-confirm-password.svg"
                    alt=""
                  />
                </div>
                <div class="form-group">
                  <label for="confirm">Confirm New Password</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="confirm"
                  />
                  <img
                    src="/images/icons/svg/icon-confirm-password.svg"
                    alt=""
                  />
                </div>
              </div>

              <button>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>