<template>
  <div>
    <h2>User Account</h2>
    <br />
    <div>
      <p>{{ payload.firstName }} {{ payload.lastName }}</p>
      <p>{{ payload.emailAdd }}</p>
    </div>
    <div>
      <input type="text" v-model="payload.username" placeholder="username" />
      <input type="text" v-model="payload.firstName" placeholder="firstName" />
      <input type="text" v-model="payload.lastName" placeholder="lastName" />
      <input type="text" v-model="payload.emailAdd" placeholder="emailAdd" />
      <button type="submit" @click="(event) => updateUser(users.userId)">
        Update Profile
      </button>
      <button type="submit" @click="(event) => deleteUser(users.userId)">
        Delete Profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.users;
    },
  },
  data() {
    return {
      payload: {
        username: "",
        firstName: "",
        lastName: "",
        emailAdd: "",
      },
    };
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("deleteUser", { id: userId });
    },
    updateUser(users) {
      this.$store.dispatch("updateUser", {
        id: this.users.userId,
        data: this.payload,
      });
      this.payload = {
        username: "",
        firstName: "",
        lastName: "",
        emailAdd: "",
      };
    },
  }
};
</script>

<style scoped></style>
