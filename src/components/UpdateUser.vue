<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn modalButton"
    data-bs-toggle="modal"
    :data-bs-target="'#updateUserModal'+user.userId"
  >
    Update User
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'updateUserModal'+user.userId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Update Details
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateUser">
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                required
                v-model="payload.userId"
                disabled="disabled"
              >
              <input
                type="text"
                class="form-control w-50 mx-auto"
                required
                placeholder="First Name"
                v-model="payload.firstName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                required
                placeholder="Last Name"
                v-model="payload.lastName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                required
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
                required
                placeholder="Email Address"
                v-model="payload.emailAdd"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                required
                placeholder="Mobile Number"
                v-model="payload.mobileNumber"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                required
                placeholder="Password"
                v-model="payload.userPass"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-success"
                @click="(event) => updateUser(payload.userId)"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "UpdateUser",
  props:{
    user:Object
  },
  data() {
    return {
      payload: {
        userId: this.user.userId,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userAge: this.user.userAge,
        username: this.user.username,
        emailAdd: this.user.emailAdd,
        mobileNumber: this.user.mobileNumber,
        userPass: "",
      },
    };
  },

  methods: {
    async updateUser() {
      console.log(this.$data);
      try {
          await this.$store.dispatch("updateUser", {
          id: this.payload.userId,
          data: this.payload,
        });
        Swal.fire({
          title: "Update Successful",
          text: "User has been updated successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000);
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Failed to update user",
          icon: "error",
          timer: 2000,
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.modalButton {
  height: 52px;
  margin: auto;
  margin-bottom: 10px;
  background-color: rgb(39, 142, 86);
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
}
.modalButton:hover {
  background-color: rgb(35, 211, 105);
  color: white;
  transform: translateY(-2px);
}
</style>
