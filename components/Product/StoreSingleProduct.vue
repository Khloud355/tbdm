<template>
  <div class="product">
    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="pa-3"
    >
      <v-skeleton-loader class="card"
        type="image,table-heading,table-heading,list-item-two-line, actions"
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
  data() {
    return {
      quantity: false,
    };
  },
};
</script>

<style lang="scss">
.card{
.v-skeleton-loader {
  border: none;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  /* transition: all 0.3s; */
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
.v-skeleton-loader__image {
  text-align: center;
  padding: 1rem;
  padding-bottom: 0;
  overflow: hidden;
  height: 250px ;
}
.v-skeleton-loader__actions {
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
  .v-skeleton-loader__button {
    width: 50%;
    padding: 0.5rem 0;
    border-radius: 1px !important;
  }
}
.v-skeleton-loader__text {
  width: 34%;

  &:last-child {
    width: 70%;
  }
}

.v-skeleton-loader__table-heading {
  padding: 16px 16px 0px !important;
  // position: relative;
 &:nth-of-type(2){
   position: relative;
  .v-skeleton-loader__text {

      max-width: 17%;
      padding: 0.2rem;
      border-radius: 0;
    z-index: 10;
  }
  .v-skeleton-loader__heading {
  // border-radius: 10px;
  padding: 0.3rem 0.6rem;
  border-radius: 0 !important;
  z-index: 10;
}
 }
&:nth-of-type(3){
     display: flex;
justify-content: center;
 
      height: 1rem;
    bottom: 2.5rem;
   .v-skeleton-loader__heading {
display: none;
  }
   .v-skeleton-loader__text{
    //  margin-bottom: 1rem;
   position: absolute;
     max-width: 17%;
      padding: 0.2rem;
      border-radius: 0;
          margin-left: 6rem
 
    // position: absolute;
   }
}
}
}
</style>