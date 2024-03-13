<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn modalButton"
    data-bs-toggle="modal"
    :data-bs-target="'#updateProductModal'+post.postId"
  >
    Update Post
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="'updateProductModal'+post.postId"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Update Post
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updatePost">
            <div class="mb-3">
                <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Post Id"
                v-model="payload.postId"
                />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="User Id"
                v-model="payload.userId"
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
                @click="(event) => updatingPost()"
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
  name: "UpdatePost",
  props: {
    post:Object,
  },
  data() {
    return {
      payload: {
        postId: this.post.postId,
        userId: this.post.userId,
        content: this.post.content,
        comments: this.post.comments,
      },
    };
  },
  methods: {
    async updatingPost() {
      await this.$store.dispatch("updatePost", {
        id: this.payload.postId,
        data: this.payload,
      });
      window.location.reload();
    },
  },
};
</script>

<style scoped></style>
