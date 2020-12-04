<template>
 
    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="pa-3"
    >
     <div class="container">
      <v-row>
        <v-col cols="12" md="4">
            <v-skeleton-loader
            type="table-heading"
          ></v-skeleton-loader>
          <v-skeleton-loader
            type="image,table-heading,list-item-two-line, actions"
          ></v-skeleton-loader>

          <!-- <v-skeleton-loader
          v-bind="attrs"
          type="date-picker"
        ></v-skeleton-loader> -->
        </v-col>
      </v-row>
       </div>
    </v-sheet>
 
</template>


<style lang="scss">
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
  height: 250px !important;
}
.v-skeleton-loader__actions {
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
  .v-skeleton-loader__button {
    width: 50%;
    padding: 1.5rem 0;
  }
}
.v-skeleton-loader__text {
  width: 34%;

  &:last-child {
    width: 70%;
  }
}
.v-skeleton-loader__heading {
  // border-radius: 10px;
    padding: 0.3rem 0.6rem;
  border-radius: 0 !important;
}
.v-skeleton-loader__table-heading {
  padding: 16px 16px 0px !important;
  .v-skeleton-loader__text {
    &:last-child {
      max-width: 17%;
      padding: 0.8rem;
      border-radius: 0;
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

    //   data: () => ({
    //     attrs: {
    //       class: "mb-6",
    //       boilerplate: true,
    //       elevation: 2,
    //     },
    //   }),
    // },
  },
};
</script>