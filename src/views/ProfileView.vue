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
            <button
              @click="(openForm)"
              class="updateButton btn"
            >
              Update
            </button>
            <!-- <updateUser :user="user" @updateUser="updateUser" /> -->
            <button @click="logoutUser" class="logoutButton btn">
              Log Out
            </button>

            
          </div>
        </div>
      </div>
    </div>
    <div class="formContainer" v-if="editProfile">
      <form @submit.prevent="updateUser" class="formCont">
        <h2 class="heading">Update</h2>
        <label>username: </label>
          <input class="input formDeets" type="text" v-model='editedUser.username'>
        <label>first name: </label>
          <input class="input formDeets" type="text" v-model='editedUser.firstName'>
        <label>last name: </label>
          <input class="input formDeets" type="text" v-model='editedUser.lastName'>
        <label>age: </label>
          <input class="input formDeets" type="text" v-model='editedUser.userAge'>   
        <label>email: </label>
          <input class="input formDeets" type="text" v-model='editedUser.emailAdd'>
        <div class="btn-align">
          <button type="submit" class="btn">Save</button>
          <button @click="closeForm" class="btn">Cancel</button>
        </div>
      </form>
    </div>
    <!-- start of display posts -->
    <div class="container">
      <div class="card">
        <div class="col"v-if="user && posts && posts.length">
          <h2 class="heading">{{ user.firstName }}'s Posts</h2>
            <div v-for="post in posts" :key="post.postId">
              <p>{{ post.username }}</p>
              <p>{{ post.content }}</p>
            </div>
        </div>
        <div v-else>
          <p>no posts available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import updateUser from "@/components/UpdateUser.vue";

export default {
  data() {
    return {
      user: null,
      editProfile: false,
      editedUser: {},
    };
  },
  mounted() {
    this.getUserData();
    },
  methods: {
    openForm(){
      this.editedUser = {...this.user};
      this.editProfile = true
    },
    closeForm() {
      this.editedUser = {};
      this.editProfile = false
    },
    getUserData() {
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
        this.getUserData(); // Fetch updated user data after deletion
        this.$router.push("/login");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    logoutUser() {
      this.$store.dispatch("logout");
    },
    async updateUser() {
      try {
        await this.$store.dispatch("updateUser", {
          id: this.user.userId,
          data: this.editedUser,
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
.formDeets {
  color: #a7926e;
  text-align: inherit;
  font-size: medium;
  padding: 0 0px 20px 20px;
}
.formCont {
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
  margin-bottom: 50px;
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
label {
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: medium;
  padding: 0 20px;
}
.btn-align {
  display: flex;
  justify-content: center;
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
  background-image: url("https://iili.io/JXP744e.md.jpg");
  /* background-repeat: no-repeat;
  background-size: cover; */
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
  color: #a7926e;
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
  color: #a7926e;
}
.input {
  border-radius: 15px;
  border: none;
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
  .formCont {
    width: 280px;
    margin-bottom: 20px;
  }
}
</style>
