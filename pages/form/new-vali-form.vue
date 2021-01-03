<template>
  <section class="valid">
    <div class="container">
      <div class="form-content">
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
            />
            <p>{{ email }}</p>
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="password"
            />
            <p>{{ password }}</p>
          </div>
          <button class="btn btn-danger" @click="submit()">Submit</button>
          <p v-if="sucess">every thing is ok</p>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: "",
      sucess: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

  methods: {
    submit() {
    //   this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error >> ");
        return;
      }
    },
  },
};
</script>