<template>
  <div class="container">
    <div class="row1">
      <div class="col">
        <input
          type="text"
          placeholder="Search post"
          class="form-control"
          v-model="searchQuery"
        />
        <button class="btn" @click="sortByDate">Sort by date</button> <!-- Add click event for sorting -->
      </div>
      <div class="col">
        <addPost />
      </div>
    </div>
    
    <div class="row" v-if="filteredPosts"> <!-- Use filteredPosts instead of posts -->
      <Card v-for="post in filteredPosts" :key="post.postId">
        <template #card-header>
          <h3 class="card-title">{{ post.content }}</h3>
        </template>
        <template #card-body>
          <p class="card-text">@{{ post.username }}</p>
          <div class="post">
            <p class="timestamp">{{ date }}</p>
          </div>
        </template>
        <template #card-footer>
          <div class="button">
            <button
              class="btn deleteButton"
              @click="deletePost(post.postId)"
            >
              Delete
            </button>
            <updatePost :post="post" @updatePost="updatePost" />
          <button @click="openForm" class="commentButton btn">Comment</button>
          </div>
          
            
          <div class="formContainer" v-if="openComments">
            <h2 class="heading">Comments</h2>
            <div v-if="comments">
              <div v-for="comment in comments" :key="comment.postId">
                <div @submit.prevent="closeComments" class="formCont">
                  <div>{{ comment.username }}</div>
                  <div>{{ comment.comments }}</div>
                  <div>{{ date }}</div>
                  <div class="btn-align">
                    <button @click="closeForm" class="btn">Cancel</button>
                    <addComment />
                    <updateComment
                :comment="comment"
                @updateComment="updateComment"
              />
                    <button
                class="btn"
                @click="deleteComment(comment.commentId)"
              >
                Delete
              </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="row" v-else>
      <p class="lead">No posts found.</p>
    </div>

  </div>
</template>

<script>
import Card from "../components/Card.vue";
import addPost from "@/components/AddPost.vue";
import addComment from "@/components/AddComment.vue";
import updatePost from "@/components/UpdatePost.vue";
import updateComment from "@/components/UpdateComment.vue";

export default {
  data() {
    return {
      postContent: '',
      date: '',
      searchQuery: '', // Stores the user's search query
      openComments: '',
      closeComments: {},
    };
  },
  components: {
    Card,
    addPost,
    addComment,
    updatePost,
    updateComment,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    comments() {
      return this.$store.state.comments;
    },
    filteredPosts() {
      // If there's no search query, return all posts
      if (!this.searchQuery) {
        return this.posts;
      }

      // Otherwise, filter posts based on the search query
      const query = this.searchQuery.toLowerCase();
      return this.posts.filter((post) =>
        post.content.toLowerCase().includes(query)
      );
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchComments");
    this.updateDate();
  },
  methods: {
    createPost() {
      this.updateDate();
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
    updateComment(comment) {
      let editComment = {
        postId: this.comment.postId,
        username: this.comment.username,
        commentId: this.comment.commentId,
        comments: this.comment.comments,
      };
      this.$store.dispatch("updateComment", {
        id: comment.commentId,
        data: editComment,
      });
    },
    deleteComment(commentId) {
      this.$store.dispatch("deleteComment", { id: commentId });
    },
    updateDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      this.date = `${year}-${month}-${day}`;
    },
    openForm() {
      this.closeComments = { ...this.comments };
      this.openComments = true;
    },
    closeForm() {
      this.closeComments = {};
      this.openComments = false;
    },
    sortByDate() {
      // Sort filteredPosts by date
      this.filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
};
</script>

<style scoped>
.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-control {
  width: 250px;
  align-items: center;
}
.form-control:hover {
  border: #a7926e 1px dashed;
}
.container {
  background-image: url("https://iili.io/JXZN74t.md.jpg");
}
.card-text {
  padding-left: 20px;
  text-align: left;
  font-size: medium;
  font-weight: 500;
  margin: 0;
}
.card-title {
  color: #a7926e;
}
.timestamp {
  padding-left: 20px;
  text-align: left;
  font-size: smaller;
}
a {
  text-decoration: none;
  color: inherit;
}
.btn {
  padding: 6px;
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
.button {
  display: inline-block;
  justify-content: space-between;
}
.card {
  width: 18rem;
  margin-bottom: 30px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 20px;
  padding-top: 20px;
  height: auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 30px 20px;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  padding: 20px;
  height: auto;
  /* margin: 20px; */
}
@media (max-width: 351px) {
  .card {
    margin: 10px 0;
  }
}
</style>