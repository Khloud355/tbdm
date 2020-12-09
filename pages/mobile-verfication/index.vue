<template>
  <section class="mobile-verfiy">
    <div class="container">
      <div class="verfiy-page">
        <div class="row">
          <div class="col-6">
            <div class="image">
              <img src="/images/authentication.png" alt="" />
            </div>
          </div>
          <div class="col-6">
            <h3>Mobile Verification</h3>
            <p>
              A-6 - Digit PIN has been sent to your mobile number, enter it
              below to continue
            </p>
            <form>
              <div class="boxes">
                <div v-for="(todo, index) in todos" :key="todo.id" class="box">
                  <input
                    type="text"
                    v-model="todo.datatype"
                    ref="todos"
                    maxlength="1"
                    @input="moveToNextField($event.target.value, index)"
                  />
                </div>
              </div>

              <button>Verify</button>
            </form>
            <p class="resend">Can you resend Verification email after 45:00</p>
            <p class="recive">Didn't recieve a code?</p>
            <span class="sign-link"><a href="#">Resend</a></span>
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
      todos: [
        { id: "1", datatype: "" },
        { id: "2", datatype: "" },
        { id: "3", datatype: "" },
        { id: "4", datatype: "" },
        { id: "5", datatype: "" },
      ],
    };
  },
  methods: {
    moveToNextField(value, index) {
      const nextIndex = index + 1;
      if (nextIndex < this.todos.length && value.length >= 1) {
        this.$refs.todos[nextIndex].focus();
      }
    },
  },
};
</script>