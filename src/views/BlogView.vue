<template>
  <div>
    <br />
    <h2>Posts Table</h2>
    <br />
    <addPost />
    <div class="container table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>Post Id</th>
            <th>Username</th>
            <th>Content</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="posts">
          <tr v-for="post in posts" :key="post.postId">
            <td>{{ post.postId }}</td>
            <td>{{ post.username }}</td>
            <td>{{ post.content }}</td>
            <td>{{ post.comments }}</td>
            <td class="d-flex justify-content-between">
              <updatePost :post="post" @updatePost="updatePost" />
              <button
                class="btn btn-success deleteButton"
                @click="deletePost(post.postId)"
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
import updatePost from "@/components/UpdatePost.vue";
import addPost from "@/components/AddPost.vue";

export default {
  components: {
    updatePost,
    addPost,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch("deletePost", { id: postId });
    },
    updatePost(post) {
      let editPost = {
        postId: post.postId,
        username: post.username,
        content: post.content,
        comments: post.comments,
      };
      this.$store.dispatch("updatePost", { id: post.postId, data: editPost });
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
