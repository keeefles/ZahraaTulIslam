<template>
  <div class="container">
    <div class="row links">
      <div class="col">
        <h2 class="h6 col1" js-footer="toggle">About the Developer:</h2>
        <ul js-footer="menu">
          <li>
            <i class="bi bi-whatsapp"> +27 79 866 6734</i>
          </li>
          <li>
            <i class="bi bi-instagram"><a href="https://www.instagram.com/_aakeefahjones_/" target="_blank"> _aakeefahjones_</a></i><br>
          </li>
          <li>
            <i class="bi bi-github"><a href="https://github.com/keeefles" target="_blank"> @keeefles</a></i><br>
          </li>
          <li>
            <i class="bi bi-envelope-heart"> aakeefahj@gmail.com</i><br>
          </li>
        </ul>
      </div>
      <div class="col">
        <h2 class="h6 col1" js-footer="toggle">About Us:</h2>
        <ul js-footer="menu">
          <li>
            <a href="/about">What are we about?</a>
          </li>
          <li>
            <a href="/about">Why we started?</a>
          </li>
          <li>
            <a href="/about">Who started the Blog?</a>
          </li>
          <li>
            <a href="/contact">Get in touch</a>
          </li>
        </ul>
      </div>
    </div>
      <div class="row">
          <p class="footer">Zahraa Tul Islam &copy; <span>{{ currYear }}</span></p>
      </div>
  </div>
</template>

<script>
  export default {
      name: 'FooterComp',
      data() {
          return {
              currYear: new Date().getFullYear()
          }
      }
  }
</script>

<style scoped>
li {
  text-decoration: none;
  display: list-item;
  text-align: left;
}
.col {
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}.container {
  margin-top: 20px;
}
.footer {
  padding-top: 10px;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.container {
  font-size: small;
}
@media(max-width:349px) {
  ul {
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
  }
  h2 {
    text-align: center;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
  }
  .col1 {
    width: 130px;
    justify-content: center;
    text-align: center;
  }
}
</style>
