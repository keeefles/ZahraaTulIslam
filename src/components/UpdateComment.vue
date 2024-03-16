<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn modalButton"
    data-bs-toggle="modal"
    :data-bs-target="'#updateCommentModal' + comment.commentId"
  >
    Update Post
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'updateCommentModal' + comment.commentId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Update Comment
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateComment">
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
                class="btn btn-success"
                data-bs-dismiss="modal"
                @click="(event) => updatingComment()"
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
export default {
  name: "UpdateComment",
  props: {
    comment: Object,
  },
  data() {
    return {
      payload: {
        postId: this.comment.postId,
        commentId: this.comment.commentId,
        comments: this.comment.comments,
      },
    };
  },
  methods: {
    async updatingComment() {
      await this.$store.dispatch("updateComment", {
        id: this.payload.commentId,
        data: this.payload,
      });
      window.location.reload();
    },
  },
};
</script>

<style scoped></style>
