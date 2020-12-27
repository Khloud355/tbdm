<template>
  <section class="api">
    <div class="container">
      <div class="api" v-for="item in items" :key="item">
        <h1>{{ item.title }}</h1>
      </div>

      <div class="row">
        <div class="col-6" v-for="ar in arr" :key="ar">
          <input
            type="text"
            v-model="ar.firstname"
            class="form-control form-control-lg"
            id="name"
          />
          <label for="name">{{ ar.firstname }}</label>
        </div>
        <div class="col-6" v-for="ar in arr" :key="ar">
          <input
            type="text"
            v-model="ar.lastname"
            class="form-control form-control-lg"
          />
          <label for="name">{{ ar.lastname }}</label>
        </div>
      </div>
      <button @click="postdata()">click here</button>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      arr: [{ firstname: "", lastname: "" }],
    };
  },
  methods: {
    getdata() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => console.log(err));
    },
    postdata() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.arr)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>