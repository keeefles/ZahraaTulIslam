<template>
  <NavBar/>
  <router-view/>
  <Spinner/>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Spinner from './components/Spinner.vue'

export default {
  components: {
    NavBar,
    Footer,
    Spinner,
  }
}
</script>

<style src="./assets/css/style.css"></style>