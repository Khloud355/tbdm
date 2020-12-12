<template>
  <section class="topic-card">
    <div class="container">
      <div class="cards">
        <h3>Select Topic</h3>
        <div class="box">
          <div class="row">
            <div class="col-md-4" v-for="card in 9" :key="card">
                <a href="#">
              <b-card
                title="Sports"
                img-src="/images/person.jpeg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-text>Some quick example text to build Lorem ipsum dolor sit amet consectetur a</b-card-text>

                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>