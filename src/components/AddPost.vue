<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#addPostModal"
  >
    Add Post
  </button>
  <div
    class="modal fade"
    id="addPostModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Create Post
        </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addingPost">
            <!-- <div class="mb-3">
                <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Post Id"
                v-model="payload.postId"
                />
            </div> -->
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
                placeholder="Post Content"
                v-model="payload.content"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addPost",
  data() {
    return {
      payload: {
        // postId: "",
        username: "",
        content: "",
      },
    };
  },
  methods: {
    addingPost() {
      console.log(this.payload);
      try {
        this.$store.dispatch("addPost", this.payload);
      } catch (error) {
        console.error(error);
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
  background: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.btn:active {
  box-shadow: none;
}
</style>
