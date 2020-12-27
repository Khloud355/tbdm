<template>
  <section class="test">
    <div class="container">
      <!-- <div class="row justify-content-center">
        <div class="col-3" v-for="item in items" :key="item">
        
            <div class=" id">{{ item.id }}</div>
            <div class=" title">{{ item.title }}</div>
            <div class=" body">{{ item.body }}</div>
          
        </div>
      </div> -->
      <form>
        <div class="row">
          <div class="col-6" v-for="(detail,index) in details" :key="index">
            <input
              type="text"
              v-model="detail.firstname"
              class="form-control form-control-lg"
            />
          </div>
          <div class="col-6" v-for="(detail,index) in details" :key="index">
            <input
              type="text"
              v-model="detail.lastname"
              class="form-control form-control-lg"
            />
          </div>
        </div>

      </form>
              <button class="btn btn-danger" type="submit" @click="postdata()">submit</button>
    </div>
  </section>
</template>
<style scoped>
.id {
  background-color: blueviolet;
  height: 5rem;
}
.title {
  background-color: brown;
  height: 5rem;
  margin: 0 1rem;
}
.body {
  background-color: burlywood;
  height: 5rem;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      details: [{ firstname: "", lastname: "" }],
    };
  },
  methods: {
    postdata() {
       axios
        .post("https://jsonplaceholder.typicode.com/posts", this.details)
        .then((res) => {
          console.log(res);
        });
    },
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.items = res.data;
    });
   
  },
};
</script>