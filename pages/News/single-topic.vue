<template>
  <section class="single-topic">
    <div class="container">
      <!-- <h3>Sports</h3> -->
      <div class="row">
        <div class="col-md-8">
          <div class="topic-content">
            <div class="row">
              <div class="col-12">
                <b-card
                  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-text>
                    <div class="text">
                      <div class="row">
                        <div class="col-10">
                          <span
                            >Some quick example text to build on the card title
                            and make up the bulk of the card's content. and make
                            up the bulk of the card's content.
                          </span>
                        </div>
                        <div class="col-2">
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="topic-ads">
            <h3>Ads</h3>
            <div class="row" v-for="topic in 4" :key="topic">
              <div class="col-12">
                <div class="ads">
                <div class="ads-box">
                    
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>