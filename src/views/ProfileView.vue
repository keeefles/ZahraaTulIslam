<template>
  <div class="cont">
    <!-- User Profile -->
    <div class="container">
      <div class="card">
        <div class="col" v-if="user">
          <h2 class="heading">{{ user.firstName }} {{ user.lastName }}</h2>
          <p>
            <span class="leads">username: </span> <br /><span class="userData"
              >{{ user.username }}
            </span>
          </p>
          <p>
            <span class="leads">first name: </span> <br /><span class="userData"
              >{{ user.firstName }}
            </span>
          </p>
          <p>
            <span class="leads">last name: </span> <br /><span class="userData"
              >{{ user.lastName }}
            </span>
          </p>
          <p>
            <span class="leads">age: </span> <br /><span class="userData"
              >{{ user.userAge }}
            </span>
          </p>
          <p>
            <span class="leads">email address: </span> <br /><span
              class="userData"
              >{{ user.emailAdd }}
            </span>
          </p>
          <div class="btn-spacing">
            <button
              @click="(event) => deleteUser(user.userId)"
              class="deleteButton btn"
            >
              Delete
            </button>
            <updateUser :user="user" @updateUser="updateUser" />
            <button @click="logoutUser" class="logoutButton btn">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import updateUser from "@/components/UpdateUser.vue";

export default {
  components: {
    updateUser,
  },
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
        await this.$store.dispatch("deleteUser", { id: this.user.userId });
        this.fetchUserData(); // Fetch updated user data after deletion
        this.$router.push("/login");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    logoutUser() {
      this.$store.dispatch("logout");
    },
    async updateUser(userData) {
      try {
        await this.$store.dispatch("updatingUser", {
          id: this.user.userId,
          data: userData,
        });
        this.$router.push("/profile");
      } catch (error) {
        console.error("Error updating user:", error);
      }
      setTimeout(() => {
          window.location.reload();
        }, 3000);
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 5px;
  margin: 10px;
  border-radius: 15px;
  background: teal;
  color: white;
  cursor: pointer;
  transition: 0.3s linear;
}
.btn:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  background-color: #a7926e;
}
.btn-spacing {
  display: flex;
  justify-content: space-evenly;
}
.container {
  margin: 50px;
  display: inline-block;
}
.cont {
  background-color: #a7926e;
}
.card {
  width: 400px;
  height: auto;
  background-color: #fff;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
  text-align: left;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.leads {
  font-weight: 400;
  font-size: medium;
  padding: 20px 15px;
}
.userData {
  color: teal;
  text-align: inherit;
  font-size: medium;
  padding: 20px 15px;
}
.heading {
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 600;
  margin: auto;
  padding: 10px;
  text-align: center;
  color: teal;
}

.card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

@media (max-width: 351px) {
  .card {
    width: 280px;
    margin: auto;
    height: auto;
    margin-bottom: 20px;
  }
  .container {
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
}
</style>
