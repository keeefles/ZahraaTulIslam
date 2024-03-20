<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn modalButton"
    data-bs-toggle="modal"
    :data-bs-target="'#updateUserModal'+user.userId"
  >
    Update
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
            </div>
            <div class="mb-3">
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
                placeholder="User Role"
                v-model="payload.userRole"
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
        userRole: this.user.userRole,
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
  background-color: teal;
}
</style>
