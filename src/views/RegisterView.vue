<template>
  <div class="outerCont">
    <div class="form-container">
      <p class="title">Create an account</p>
      <form class="form">
        <input type="text" 
          class="input" 
          placeholder="First Name"
          v-model="payload.firstName" />
        <input type="text" 
          class="input" 
          placeholder="Last Name"
          v-model="payload.lastName" />
        <input type="text" 
          class="input" 
          placeholder="Age"
          v-model="payload.userAge" />
        <input type="text" 
          class="input" 
          placeholder="Username"
          v-model="payload.username" />
        <input type="email" 
          class="input" 
          placeholder="Email Address"
          v-model="payload.emailAdd" />
        <input type="text"
          class="input" 
          placeholder="Mobile Number"
          v-model="payload.mobileNumber" />
        <input type="password" 
          class="input" 
          placeholder="Password"
          v-model="payload.userPass" />
        <button class="form-btn"
          type="submit"
          @click.prevent="addingUser"
          >
          Create account
        </button>
      </form>
      <p class="sign-up-label">
        Already have an account? <router-link to="/login" a class="sign-up-link"> Log In </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addUser",
  data() {
    return {
      payload: {
        userId: null,
        firstName: "",
        lastName: "",
        userAge: null,
        username: "",
        emailAdd: "",
        mobileNumber: "",
        userPass: "",
      },
    };
  },
  methods: {
    addingUser() {
      try {
        this.$store.dispatch("register", this.payload);
        this.$router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.outerCont {
  padding: 20px;
  background-image: url("https://iili.io/JXP744e.md.jpg");
  /* background-repeat: no-repeat;
  background-size: cover; */
}
.form-container {
  width: 350px;
  height: 680px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px 30px;
  display: inline-block;
}

.title {
  text-align: center;
  margin: 10px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
}

.sub-title {
  margin: 0;
  margin-bottom: 5px;
  font-size: 9px;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  margin-bottom: 15px;
}

.input {
  border-radius: 20px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

.form-btn {
  padding: 10px 15px;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: #a7926e;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0;
  font-size: 10px;
  color: #747474;
}

.sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: #a7926e;
  color: #a7926e;
  cursor: pointer;
  font-weight: 800;
}

@media (max-width: 351px) {
  .form-container {
    width: 250px;
    height: auto;
  }
}
</style>