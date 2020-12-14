<template>
  <div class="store-vendor">
    <!-- <img src="/images/vendor.PNG" alt=""> -->
    <div class="image">
      <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader class="image-loader" type="card-heading"></v-skeleton-loader>
      </v-sheet>
    </div>

    <h4>  <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader class="head-loader" type="card-heading"></v-skeleton-loader>
      </v-sheet></h4>
    <p>  <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader class="paragraph-loader" type="card-heading"></v-skeleton-loader>
      </v-sheet></p>
    <div class="rate">
      <!-- <span>5.0</span>
      <img src="/images/icons/svg/vendor-star.svg" alt="" /> -->
       <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader class="rate-loader" type="card-heading"></v-skeleton-loader>
      </v-sheet>
    </div>
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