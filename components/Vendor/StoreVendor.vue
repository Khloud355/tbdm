<template>
    <div class="store-vendor">
        <!-- <img src="/images/vendor.PNG" alt="">
        <h4>Tom Hanks</h4>
        <p>2,465 Product</p>
        <div class="rate-box">
            <span>5.0</span>
            <img src="/images/icons/svg/vendor-star.svg" alt="">
        </div>
    </div> -->
     <v-sheet
    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
    class="pa-3"
  >
    <v-skeleton-loader
      type="card-heading,list-item-two-line,actions "
    ></v-skeleton-loader>
  </v-sheet>
    </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>