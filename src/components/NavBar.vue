<template>
  <div class="Logo">
    <h3 class="nav-title">ZAHRAA TUL ISLAM</h3>
  </div>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" a class="nav-link"> HOME </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" a class="nav-link"> ABOUT </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" a class="nav-link"> FEED </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" a class="nav-link"> ADMIN </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" a class="nav-link"> CONTACT </router-link>
          </li>
          <li class="nav-item nav-space">
            <router-link to="/register" a class="nav-link"><i class="bi bi-person-plus-fill"></i></router-link>
          </li>
          <li class="nav-item nav-space">
            <router-link to="/profile" a class="nav-link"><i class="bi bi-person-circle"></i></router-link>
          </li>
          <li class="nav-item nav-space">
            <router-link to="/" a class="nav-link"> LOGIN </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/register" a class="nav-link">
              SIGN-UP
            </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav-title {
  letter-spacing: 10px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding-top: 20px;
}
.navbar {
  background-color: #fff;
}
.navbar-nav {
  width: 100%;
  justify-content: center;
}
.headBar {
  text-align: center;
  background-color: black;
  color: #fff;
  font-size: x-small;
  padding: 5px;
  margin: 0px;
}
.nav-item {
  margin-left: 25px;
  margin-right: 25px;
  color: black;
}
nav {
  padding-left: 30px;
  padding-right: 30px;
}
body {
  color: black;
}
.nav-item a:hover {
  font-weight: bold;
  color: teal;
  padding: 6px;
}
.nav-item a.router-link-exact-active {
  color: teal;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px teal;
  padding: 6px;
}
</style>
