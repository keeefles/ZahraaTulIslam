<template>
  <div>
    <br />
    <h2>Comments Table</h2>
    <br />
    <addComment />
    <div class="container table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>Comment Id</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="comments">
          <tr v-for="comment in comments" :key="comment.commentId">
            <td>{{ comment.comments }}</td>
            <td class="d-flex justify-content-between">
              <updateComment :comment="comment" @updateComment="updateComment" />
              <button
                class="btn btn-success deleteButton"
                @click="deleteComment(comment.commentId)"
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
import updateComment from "@/components/UpdateComment.vue";
import addComment from "@/components/AddComment.vue";

export default {
  components: {
    updateComment,
    addComment,
  },
  computed: {
    posts() {
      return this.$store.state.comments;
    },
  },
  mounted() {
    this.$store.dispatch("fetchComments");
  },
  methods: {
    deleteComment(commentId) {
      this.$store.dispatch("deleteComment", { id: commentId });
    },
    updateComment(comment) {
      let editComment = {
        postId: comment.postId,
        commentId: comment.commentId,
        comments: comment.comments,
      };
      this.$store.dispatch("updateComment", { id: comment.commentId, data: editComment });
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