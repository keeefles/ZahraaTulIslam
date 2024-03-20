<template>
  <div class="aboutCont container-fluid">
    <h3 id="heading" class="container">ABOUT US</h3>
      <p id="aboutus">
        Welcome to Zahraa tul Islam, a sanctuary for Islamic females seeking
        guidance, inspiration, and sisterhood in their spiritual journey. Our
        blog site is dedicated to providing a nurturing space where Muslim women
        can explore their faith, find solace, and celebrate the beauty of Islam.
        Tailored exclusively for sisters in faith, Zahraa tul Islam offers a
        wealth of content ranging from heartfelt reflections to practical advice
        on various aspects of Islam. We extend a warm embrace to reverts,
        offering them support, counsel, and insights into the richness of our
        religion. Join us as we delve into the depths of faith, sharing wisdom,
        encouragement, and the transformative power of Islam.
      </p>
    <div>
      <p id="aboutus">
        Zahraa tul Islam was born out of a heartfelt desire to create a
        nurturing community for Islamic sisters. Recognizing the need for a
        dedicated platform where Muslim women could find empowerment, guidance,
        and sisterhood, we embarked on this journey. Our mission is to provide a
        safe space where females can explore and deepen their connection to
        Islam, share experiences, and uplift one another. With a focus on
        supporting reverts and embracing the beauty of our faith, Zahraa tul
        Islam aims to inspire and enrich the lives of Muslim women worldwide.
      </p>
    </div>
  </div>
  <div class="container p-3">
    <div class="row">
      <div class="img-col">
        <img
          src="https://iili.io/JYdoiFf.md.jpg"
          alt="image"
          class="center aboutImg"
          align-items="center"
        />
      </div>
      <div class="text-col">
        <h3 class="heading">ZAHRAA TUL ISLAM x AAKEEFAH JONES</h3>
        <p class="lead">
            Meet Aakeefah, the visionary 19-year-old Muslimah developer behind Zahraa tul Islam. Fueled by her passion for both Islam and technology, Aakeefah embarked on a mission to create a digital sanctuary for her sisters in faith. With determination and innovation, she brought her vision to life, crafting a platform where Muslim women could find solace, guidance, and sisterhood. Aakeefah's dedication and creativity shine through every aspect of Zahraa tul Islam, making it a beacon of inspiration for Muslimahs around the globe. Her commitment to empowering her community is a testament to the potential of young Muslim women in the digital age.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
};
</script>

<style scoped>
#aboutus {
    color: white;
    padding: 20px;
    margin: 0;

}
#heading {
  text-align: center;
  padding: 5px;
  border-bottom: solid 1px rgb(193, 181, 181);
  color: white;
  letter-spacing: 20px;
}
.heading {
  text-align: center;
  padding: 5px;
  border-bottom: solid 1px rgb(193, 181, 181);
  letter-spacing: 20px;
}
p {
  font-size: 18px;
}
.lead {
  margin: 0;
  text-align: center;
}
.p-3 {
  margin-left: 100px;
  margin-right: 100px;
}
.aboutImg {
  width: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  margin-top: 0;
  margin-bottom: 25px;
}

#row {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}

.text-col {
  flex-basis: 60%;
}

#text-col {
  text-align: center;
}

.img-col {
  flex-basis: 40%;
  margin: 0 auto 20 auto;
  height: max-content;
}

.center {
  width: 250px;
}

.aboutCont {
  padding: 50px;
  margin: 50px 0;
  text-align: center;
  background-color: teal;
}
.aboutCont1 {
  padding: 20px 100px;
  text-align: center;
}

/* media query */
@media (max-width: 351px) {
  /* .text-col {
    width: 250px;
    margin: auto;
  } */
.heading {
    padding: 20px;
    letter-spacing: 10px;
}
  .aboutImg {
    margin: 0;
    padding-bottom: 20px;
    width: 200px;
  }

  .lead {
    width: 210px;
    margin-left: auto;
    margin-right: auto;
  }

  .p-3 {
    margin: 0;
  }
}
</style>