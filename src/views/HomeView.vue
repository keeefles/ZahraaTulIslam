<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <img src="https://iili.io/JX5RwCu.md.jpg" class="homeImg" alt="" />
      </div>
      <div class="col">
      <!-- <p>{{ user.firstName }} {{ user.lastName }}</p> -->
        <H1 class="head">Welcome to <br/><br/><span>ZAHRAA TUL ISLAM</span></H1>
        <p>A sanctuary for Islamic females seeking guidance, inspiration, and sisterhood in their spiritual journey. Our blog site is dedicated to providing a nurturing space where Muslim women can explore their faith, find solace, and celebrate the beauty of Islam. </p>
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
  padding: 50px;
  text-align: center;
  font-family: 'Playfair Display', serif;
}
span {
  letter-spacing: 20px;
}
p {
  font-family: 'Playfair Display', serif;
}
@media (max-width: 351px) {
  .homeImg {
    padding: 0;
    margin: 0;
  }
  .col {
    padding: 0px;
    margin: 0px;
  }
}
</style>
