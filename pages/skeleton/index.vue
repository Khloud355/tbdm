<template>
  <div class="container">
    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="pa-3"
    >
  
          <v-skeleton-loader type="card-heading"></v-skeleton-loader>
      
        <div class="row">
          <div class="col-md-4">
            <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
          </div>
          <div class="col-md-8">
            <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
            <v-skeleton-loader type="actions"></v-skeleton-loader>
          </div>
        </div>
    </v-sheet>
  </div>
</template>

<style lang="scss">
.v-skeleton-loader__bone {
  .v-skeleton-loader__heading {
    border-radius: 12px;
    height: 20px !important;
    width: 20% !important;
  }
}
.v-skeleton-loader__actions {
text-align: left !important;
.v-skeleton-loader__button{
         height: 2rem;
    width: 2rem;
    border-radius: 50%;
 
        margin-right: 2rem;

}
}
 .v-skeleton-loader .v-skeleton-loader__list-item-three-line{
   &:nth-of-type(1){
width: 40%;
.v-skeleton-loader__text{
  &:first-child{
  margin-bottom: 1rem;
}
&:nth-of-type(2){
     width: 98% !important;
}
&:last-child{
  height: 9px;
}
}

   }
 }
</style>


<script>
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>