<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <img src="https://iili.io/JX5RwCu.md.jpg" class="homeImg" alt="" />
      </div>
      <div class="col">
      <!-- <p>{{ user.firstName }} {{ user.lastName }}</p> -->
        <H1 class="head fade-in-text">Welcome to <br/><span>ZAHRAA TUL ISLAM</span></H1>
        <p>A sanctuary for Islamic females seeking guidance, inspiration, and sisterhood in their spiritual journey. Our blog site is dedicated to providing a nurturing space where Muslim women can explore their faith, find solace, and celebrate the beauty of Islam. </p>
        <button class="btn"><router-link to="/blog" a class="nav-link"> Go to Feed </router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.homeImg {
  width: 100%;
  margin-left: -25px;
  padding-top: 20px;
}

.head {
  padding: 100px 50px 50px 50px;
  text-align: center;
}
p {
  padding: 0 50px;
  font-style: italic;
}
span {
  letter-spacing: 20px;
  text-align: center;
  color: #a7926e;
  font-weight: 600;
}
.fade-in-text {
        opacity: 0;
        animation: fadeIn 1.5s ease-in-out forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
@media (max-width: 351px) {
  .homeImg {
    padding: 25px;
    margin: 0;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .head {
    margin: 0;
  }
  span {
    letter-spacing: 10px;
  }
}
.btn {
  padding: 5px;
  margin: 10px;
  border-radius: 15px;
  background: #a7926e;
  color: white;
  cursor: pointer;
  transition: 0.3s linear;
}

.btn:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  background-color: teal;
}
</style>
