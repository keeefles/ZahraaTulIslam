<template>
  <div class="contact-form">
    <div class="container">
      <div class="main">
        <div class="content">
          <h2>Contact Us</h2>
          <form action="https://formspree.io/f/mbjnalwz" method="post">
            <label for="exampleFormControlInput1" class="form-label"
              >Name</label
            >
            <input
              type="text"
              required
              class="form-control"
              id="exampleFormControlInput1"
            />

            <label for="exampleFormControlInput1" class="form-label"
              >Surname</label
            >
            <input
              type="text"
              required
              class="form-control"
              id="exampleFormControlInput1"
            />

            <label for="exampleFormControlInput1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              required
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />

            <label for="exampleFormControlTextarea1" class="form-label"
              >Type Message</label
            >
            <textarea
              class="form-control"
              required
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>

            <input
              class="btn"
              type="submit"
              name="Send"
              value="Submit"
              placeholder="Submit"
              @submit.prevent
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-form {
  background-image: url("https://iili.io/JXP744e.md.jpg");
  /* background-repeat: no-repeat;
  background-size: cover; */
  justify-content: center;
  grid-template-rows: 1fr auto 1fr;
  display: flex;
  align-items: center;
}
.container {
  margin-top: 0 auto;
  max-width: 600px;
}
.content {
    height: 640px;
}
h1 {
  text-align: center;
  font-size: 2.5rem;
  padding-top: 20px auto;
  margin: 10px;
  font-weight: 400;
  color: #fff;
}
h2 {
  line-height: 40px;
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 700;
  color: black;
  text-align: center;
}
.contact-form .main {
  position: relative;
  display: inline-block;
  margin: 30px 0;
}
.content {
  flex-basis: 50%;
  padding: 2em 2em;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
}
.btn {
  padding: 6px;
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
form {
  margin: 30px 0;
}
input,
textarea {
  outline: none;
  margin-bottom: 15px;
  font-stretch: 16px;
  color: #000;
  padding: 14px 20px;
  width: 100%;
  display: inline-block;
  border-radius: 15px;
  background: #fff;
  transition: 0.3s ease;
}
.contact-form button {
  font-size: 15px;
  color: #fff;
  width: 50%;
  background: #a7926e;
  transition: 0.3s ease;
  padding: 14px 15px;
}
@media (max-width: 736px) {
  form {
    margin-top: 30px;
    margin-bottom: 10px;
  }
}
/* .form-control:hover {
  border: 3px solid teal;
} */
.form-text {
  text-align: left;
  color: #000;
}
</style>
