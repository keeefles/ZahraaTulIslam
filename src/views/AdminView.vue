<template>
<!-- users table -->
  <div>
    <br />
    <h2>Users Table</h2>
    <br />
    <addUser />
    <div class="container table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Age</th>
            <th>Username</th>
            <th>Email Address</th>
            <th>User Role</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userId">
            <td>{{ user.userId }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.mobileNumber }}</td>
            <td class="d-flex justify-content-between">
              <updateUser :user="user" @updateUser="updateUser" />
              <button
                class="btn btn-success deleteButton"
                @click="(event) => deleteUser(user.userId)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<!-- posts table -->
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="posts">
          <tr v-for="post in posts" :key="post.postId">
            <td>{{ post.postId }}</td>
            <td>{{ post.username }}</td>
            <td>{{ post.content }}</td>
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
<!-- comments table -->
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
            <td>{{ comment.commentId }}</td>
            <td>{{ comment.comments }}</td>
            <td class="d-flex justify-content-between">
              <updateComment
                :comment="comment"
                @updateComment="updateComment"
              />
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
import updateUser from "@/components/UpdateUser.vue";
import addUser from "@/components/AddUser.vue";
import updateComment from "@/components/UpdateComment.vue";
import addComment from "@/components/AddComment.vue";
import updatePost from "@/components/UpdatePost.vue";
import addPost from "@/components/AddPost.vue";

export default {
  components: {
    updateUser,
    addUser,
    updateComment,
    addComment,
    updatePost,
    addPost,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    comments() {
      return this.$store.state.comments;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchComments");
    this.$store.dispatch("fetchPosts");
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("deleteUser", { id: userId });
    },
    updateUser(user) {
      let editUser = {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        username: user.username,
        mobileNumber: user.mobileNumber,
        emailAdd: user.emailAdd,
        userRole: user.userRole,
        userPass: user.userPass,
      };
      this.$store.dispatch("updateUser", { id: user.userId, data: editUser });
    },
    deleteComment(commentId) {
      this.$store.dispatch("deleteComment", { id: commentId });
    },
    // hello world
    updateComment(comment) {
      let editComment = {
        postId: this.comment.postId,
        commentId: this.comment.commentId,
        comments: this.comment.comments,
      };
      this.$store.dispatch("updateComment", {
        id: comment.commentId,
        data: editComment,
      });
    },
    deletePost(postId) {
      this.$store.dispatch("deletePost", { id: postId });
    },
    updatePost(post) {
      let editPost = {
        postId: this.post.postId,
        username: this.post.username,
        content: this.post.content,
      };
      this.$store.dispatch("updatePost", {
        id: post.postId,
        data: editPost,
      });
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