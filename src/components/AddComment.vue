<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add Comments
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
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
                placeholder="Comment ID"
                v-model="payload.commentId"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Comments"
                v-model="payload.comments"
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
                @click.prevent="addingComment"
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
  name: "addComment",
  data() {
    return {
      payload: {
        postId: "",
        commentId: "",
        comments: "",
      },
    };
  },
  methods: {
    addingComment() {
      console.log(this.payload);
      try {
        this.$store.dispatch("addComment", this.payload);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
