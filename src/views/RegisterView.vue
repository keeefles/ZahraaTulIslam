<template>
  <form>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="First Name"
        v-model="payload.firstName"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="Last Name"
        v-model="payload.lastName"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="Age"
        v-model="payload.userAge"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="Username"
        v-model="payload.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="Email Address"
        v-model="payload.emailAdd"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="Mobile Number"
        v-model="payload.mobileNumber"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control w-50 mx-auto"
        placeholder="User Password"
        v-model="payload.userPass"
      />
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button
        type="submit"
        @click.prevent="addingUser"
        class="btn btn-success"
        data-bs-dismiss="modal"
      >
        Add User
      </button>
    </div>
  </form>
</template>

f
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
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>