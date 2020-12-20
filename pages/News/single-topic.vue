<template>
  <section class="single-topic">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="topic-content">
            <h3>Sports</h3>
            <div class="row">
              <div class="col-12" v-for="single in 4" :key="single">
                <b-card>
                  <div class="image">
                    <img src="https://picsum.photos/600/300/?image=25" alt="" />
                  </div>
                  <b-card-text>
                    <div class="title">lorem lorem</div>
                    <div class="row">
                      <div class="text">
                        <div class="col-10">
                          <div class="desc">
                            <span
                              >Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dolore quis ducimus qui
                              consequuntur placeat
                            </span>
                          </div>
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
                    <img src="/images/person.jpeg" alt="" />
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
