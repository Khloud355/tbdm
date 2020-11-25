<template>
  <div>
      <app-header></app-header>
      <app-navbar></app-navbar>

      <div style="min-height: 80vh; background-color: #F9F9F9">
        <Nuxt />
      </div>

      <app-footer></app-footer>
  </div>
</template>
<script>
import Header from '~/components/Navigation/Header'
import Navbar from '~/components/Navigation/Navbar'
import Footer from '~/components/Navigation/Footer'

export default {
  components: {
    appHeader: Header,
    appNavbar: Navbar,
    appFooter: Footer
  }
}
</script>
<style lang="scss">
  @import '~/assets/styles/styles-ltr/main.scss';
</style>
