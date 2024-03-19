<template>
  <div>
    <!-- User Profile -->
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="col" v-if="user">
            <h2>{{ user.firstName }} {{ user.lastName }}</h2>
            <p>{{ user.username }}</p>
            <p>{{ user.firstName }}</p>
            <p>{{ user.lastName }}</p>
            <p>{{ user.emailAdd }}</p>
            <p>{{ user.userAge }}</p>
            <div class="d-flex justify-content-between">
              <button
                @click="(event) => deleteUser(user.userID)"
                class="deleteButton"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
              <button @click="logoutUser" class="logoutButton">
                <i class="bi bi-box-arrow-in-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
      const userCookie = cookies.find((cookie) =>
        cookie.startsWith("AuthenticateUser=")
      );
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split("=")[1]);
          if (userData && userData.result) {
            this.user = userData.result;
          } else {
            console.error("Invalid user data format:", userData);
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        console.log("No user data available in cookies");
      }
    },
    async deleteUser() {
      try {
        await this.$store.dispatch("deleteUser", { id: this.user._id });
        this.fetchUserData(); // Fetch updated user data after deletion
        this.$router.push("/login");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    logoutUser() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  padding: 5px;
  margin: auto;
}
.card {
  width: 250px;
  height: auto;
  background-color: #fff;
  display: inline-block;
  justify-content: center;
  padding: 12px;
  gap: 12px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
}

.heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

.row {
  margin: 20px;
  display: inline-block;
}
</style>
