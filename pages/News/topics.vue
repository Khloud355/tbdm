<template>
  <section class="topic-card">
    <div class="container">
      <div class="cards">
        <h3>Select Topic</h3>
        <div class="box">
          <div class="row">
            <div class="col-md-4" v-for="card in 9" :key="card">
              <nuxt-link to="single-topic">
                <b-card>
                  <div class="image">
                    <img src="/images/person.jpeg" alt="" />
                  </div>
                  <b-card-text>
                    <div class="text">
                      <div class="title">Sports</div>
                      <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi non soluta do
                      </div>
                    </div>
                  </b-card-text>

                  <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>