<template>
    <div class="offer">

        <nuxt-link to="/">
            <!-- <img class="offer-img" src="/images/offer1.PNG" alt=""> -->
           
             <v-skeleton-loader
              type="image"
          ></v-skeleton-loader>
        </nuxt-link>

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