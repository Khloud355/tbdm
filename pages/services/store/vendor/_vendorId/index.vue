<template>
  <section class="vendor-page">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item">
            <nuxt-link to="/">Services</nuxt-link>
          </li>
          <li class="breadcrumb-item"><nuxt-link to="/">Store</nuxt-link></li>
          <li class="breadcrumb-item active" aria-current="page">
            Vendor Profile
          </li>
        </ol>
      </nav>

      <div class="vendor-info">
        <div class="cover">
          <!-- <img class="cover-img" src="/images/market.jpg" alt=""> -->
          <v-sheet
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-3"
          >
            <v-skeleton-loader
              class="cover-img"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
          <!-- <img src="/images/person.jpeg" alt="" class="personal-img"> -->
          <v-sheet
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-3"
          >
            <v-skeleton-loader
              class="personal-img"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
        </div>

        <div class="row">
          <div class="col-9">
            <div class="info">
              <div class="head">
                <h4>
                  <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                  >
                    <v-skeleton-loader
                      class="card-head"
                      type="card-heading"
                    ></v-skeleton-loader>
                  </v-sheet>
                </h4>
                <!-- <div class="rate-box">
                  <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                  >
                    <v-skeleton-loader type="actions"></v-skeleton-loader>
                  </v-sheet>
                </div> -->
              </div>
              <p>
                <v-sheet
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class="pa-3"
                >
                  <v-skeleton-loader
                    class="multi-line"
                    type="list-item-three-line"
                  ></v-skeleton-loader>
                </v-sheet>
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="contacts">
              <div class="row no-gutters">
                <div class="col-1">
                  <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                  >
                    <v-skeleton-loader
                      class="card-head"
                      type="card-heading"
                    ></v-skeleton-loader>
                  </v-sheet>
                </div>
                <div class="col-1"></div>
                <div class="col-10">
                  <p>
                    <v-sheet
                      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                      class="pa-3"
                    >
                      <v-skeleton-loader
                        class="card-head"
                        type="card-heading"
                      ></v-skeleton-loader>
                    </v-sheet>
                  </p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-1">
                  <!-- <img class="mail" src="/images/icons/svg/mail.svg" alt="" /> -->
                  <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                  >
                    <v-skeleton-loader
                      class="card-head"
                      type="card-heading"
                    ></v-skeleton-loader>
                  </v-sheet>
                </div>
                <div class="col-1"></div>
                <div class="col-10">
                  <p>
                    <v-sheet
                      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                      class="pa-3"
                    >
                      <v-skeleton-loader
                        class="card-head"
                        type="card-heading"
                      ></v-skeleton-loader>
                    </v-sheet>
                  </p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-1">
                  <!-- <img src="/images/icons/svg/location.svg" alt="" />
                   -->
                  <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                  >
                    <v-skeleton-loader
                      class="card-head"
                      type="card-heading"
                    ></v-skeleton-loader>
                  </v-sheet>
                </div>
                <div class="col-1"></div>
                <div class="col-10">
                  <p>
                    <v-sheet
                      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                      class="pa-3"
                    >
                      <v-skeleton-loader
                        class="card-head"
                        type="card-heading"
                      ></v-skeleton-loader>
                    </v-sheet>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vendor-products">
        <div class="head">
          <h3>Tom's Products</h3>
          <span>2,465 Product</span>
        </div>
        <div class="products">
          <div class="row">
            <div class="col-4" v-for="product in 9" :key="product">
              <app-single-product></app-single-product>
            </div>
          </div>
        </div>
      </div>

      <div class="paginator">
        <div class="overflow-auto">
          <b-pagination-nav
            :link-gen="linkGen"
            :limit="10"
            :hide-goto-end-buttons="true"
            :number-of-pages="10"
            align="center"
            use-router
          >
            <template #prev-text
              ><span
                ><img src="/images/icons/svg/chevron-left.svg" alt="" /></span
            ></template>
            <template #next-text
              ><span
                ><img src="/images/icons/svg/chevron-right.svg" alt="" /></span
            ></template>
          </b-pagination-nav>
        </div>
      </div>

      <div class="reviews">
        <div class="add-review">
          <h4>Add your review</h4>
          <div class="row no-gutters">
            <div class="col-3">
              <h6>Your review</h6>
            </div>
            <div class="col-9">
              <textarea class="form-control" id="review" rows="4"></textarea>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-3 d-flex align-items-center">
              <h6>Overall rating</h6>
            </div>
            <div class="col-9">
              <client-only>
                <star-rating
                  :rating="3.5"
                  :increment="0.5"
                  active-color="#FFD506"
                  :show-rating="false"
                  :star-size="20"
                  :padding="0.9"
                >
                </star-rating>
              </client-only>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-3"></div>
            <div class="col-9">
              <button class="btn">Submit</button>
            </div>
          </div>
        </div>
        <hr />
        <div class="prev-reviews">
          <h4>
            <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="card-heading"></v-skeleton-loader>
            </v-sheet>
          </h4>
          <div class="row no-gutters review">
            <div class="col-3">
              <client-only>
                    <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="card-heading"></v-skeleton-loader>
            </v-sheet>
                <!-- <star-rating
                  :rating="3.5"
                  :increment="0.5"
                  :read-only="true"
                  active-color="#FFD506"
                  :show-rating="false"
                  :star-size="20"
                  :padding="0.9"
                >
                </star-rating> -->
              </client-only>
                   <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
            </v-sheet>
            </div>
            <div class="col-9">
              <div class="comment">
                <p>
                   <v-sheet
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
              class="pa-3"
            >
              <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
            </v-sheet>
                </p>
                <div class="icons">
                  <div class="icon">
                    <span class="image">
                      <img src="/images/icons/svg/comment-heart.svg" alt="" />
                    </span>
                    <span class="count">113</span>
                  </div>
                  <div class="icon">
                    <span class="image">
                      <img src="/images/icons/svg/icon-comment.svg" alt="" />
                    </span>
                    <span class="count">6</span>
                  </div>
                  <!-- <div class="more">
                                        <p>See more reviews</p>
                                    </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="row no-gutters review">
            <div class="col-3">
              <client-only>
                <star-rating
                  :rating="3.5"
                  :increment="0.5"
                  :read-only="true"
                  active-color="#FFD506"
                  :show-rating="false"
                  :star-size="20"
                  :padding="0.9"
                >
                </star-rating>
              </client-only>
              <h6>Pablo Permins</h6>
              <span class="time">one hour ago</span>
            </div>
            <div class="col-9">
              <div class="comment">
                <p>
                  Got this through the post the other day and right from opening
                  the packet I knew this was quality, put it on and I was
                  right!! Well done
                </p>
                <div class="icons">
                  <div class="icon">
                    <span class="image">
                      <img src="/images/icons/svg/comment-heart.svg" alt="" />
                    </span>
                    <span class="count">113</span>
                  </div>
                  <div class="icon">
                    <span class="image">
                      <img src="/images/icons/svg/icon-comment.svg" alt="" />
                    </span>
                    <span class="count">6</span>
                  </div>
                  <!-- <div class="more">
                                        <p>See more reviews</p>
                                    </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="more">
            <p>See more reviews</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleProduct from "~/components/Product/StoreSingleProduct";

export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },

  components: {
    appSingleProduct: SingleProduct,
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
  },
};
</script>