<template>
  <div>
    <br />
    <h2>Users Table</h2>
    <br />
    <addUser />
    <div class="container table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Age</th>
            <th>Username</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userId">
            <td>{{ user.userId }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.mobileNumber }}</td>
            <td class="d-flex justify-content-between">
              <updateUser :user="user" />
              <button
                class="btn btn-success deleteButton"
                @click="(event) => deleteUser(user.userId)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import updateUser from "@/components/UpdateUser.vue";
import addUser from "@/components/AddUser.vue";

export default {
  components: {
    updateUser,
    addUser,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("deleteUser", { id: userId });
    },
    updateUser(user) {
      let editUser = {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        username: user.username,
        mobileNumber: user.mobileNumber,
        emailAdd: user.emailAdd,
        userPass: user.userPass,
      };
      this.$store.dispatch("updateUser", { id: user.userId, data: editUser });
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px;
}
@media (max-width: 351px) {
  td {
    padding: 20px;
  }
}
</style>
