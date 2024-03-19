<template>
  <div>
    <!-- User Profile -->
    <div class="container">
      <div class="row">
        <div class="col" v-if="user">
          <h2>{{user.firstName}} {{user.lastName}}</h2>
          <p>Username: {{ user.username }}</p>
          <p>First Name: {{ user.firstName }}</p>
          <p>Last Name: {{ user.lastName }}</p>
          <p>Email: {{ user.emailAdd }}</p>
          <p>Age: {{ user.userAge }}</p>
          
          <!-- Delete Button -->
          <!-- <UpdateProfile/> -->
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <button @click="(event) => deleteUser(user.userID)" class="deleteButton">Delete Account</button>
        <button @click="logoutUser" class="logoutButton">Logout</button> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const userCookie = cookies.find(cookie => cookie.startsWith('AuthenticateUser='));
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie.split('=')[1]);
          if (userData && userData.result) {
            this.user = userData.result;
          } else {
            console.error('Invalid user data format:', userData);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        console.log('No user data available in cookies');
      }
    },
    async deleteUser() {
      try {
        await this.$store.dispatch('deleteUser', { id: this.user._id });
        this.fetchUserData(); // Fetch updated user data after deletion
        this.$router.push('/login');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    logoutUser() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped></style>
