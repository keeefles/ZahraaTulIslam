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
          <li class="nav-item" v-if="adminDisplay">
            <router-link to="/admin" a class="nav-link" > ADMIN </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" a class="nav-link"> CONTACT </router-link>
          </li>
          <li class="nav-item nav-space" v-if="!loggedInUser">
            <router-link to="/register" a class="nav-link"> SIGN UP </router-link>
          </li>
          <li class="nav-item nav-space">
            <router-link to="/profile" a class="nav-link"><i class="bi bi-person-circle"></i></router-link>
          </li>
          <li class="nav-item nav-space" v-if="!loggedInUser">
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
export default {
  computed: {
    adminDisplay(){
      return this.loggedInUser && this.loggedInUser.userRole === 'Admin'
    },
    loggedInUser(){
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('AuthenticateUser='));
      if (userCookie){
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if(userData && userData.result) {
            return userData.result
          } else {
            console.error('invalid user data format', userData);
            return null;
          }
        } catch (e) {
          console.error('invalid parsing user data', e);
          return null;
        }
      } else {
        return null;
      }
    }
  },
  mounted() {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('AuthenticateUser='));
      if (userCookie){
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if(userData && userData.result) {
            this.$store.dispatch('setUser', userData.result)
            return userData.result
          } else {
            console.error('invalid user data format', userData);
            return null;
          }
        } catch (e) {
          console.error('invalid parsing user data', e);
          return null;
      }
    }
  }
};
</script>

<style>
.nav-title {
  letter-spacing: 10px;
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
  color: #a7926e;
  padding: 6px;
}
.nav-item a.router-link-exact-active {
  font-weight: bold;
  color: #a7926e;
  padding: 6px;
}
.navbar a {
    position: relative;
    font-size: 18px;
    color: #a7926e;
    font-weight: 500;
    text-decoration: none;
    margin-left: 40px;
}
.navbar a::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 2px;
        background: #a7926e;
        transition: .4s;
} 
.navbar :hover::before {
    width: 100%;
}
</style>
