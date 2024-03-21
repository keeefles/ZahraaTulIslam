<template>
  <div class="container">
    <div class="row1">
      <div class="col">
        <input type="text" placeholder="Search post by username" class="form-control">
        <button class="btn">Sort by date</button>
      </div>
      <div class="col">
            <addPost />
          </div>
      </div>
    <div class="row" v-if="posts">
      <Card v-for="post in posts" :key="post.postId">
        <template #card-header>
          <h3 class="card-title">"{{ post.content }}"</h3>
        </template>
        <template #card-body>
          <p class="card-text">
            @{{ post.username }}
          </p>
          <div class="post">
    <p class="timestamp">{{ date }}</p>
  </div>
        </template>
        <template #card-footer>
          <button
              @click="(openForm)"
              class="commentButton btn"
            >
              Comment
            </button>

            <div class="formContainer" v-if="openComments">
              <div v-if="comments">
                <div v-for="comment in comments" :key="comment.postId">
                  <div @submit.prevent="closeComments" class="formCont">
        <h2 class="heading">Comments</h2>
        <div>{{ comments.username }}</div>
          <div>{{ comments.comments }}</div>
          <div>{{ date }}</div>
          <div class="btn-align">
          <addComment />
          <button @click="closeForm" class="btn">Cancel</button>
        </div>
      </div>
              </div>
                </div>
                
              
        
      
    </div>
          <!-- <div v-for="comments in comments" :key="comments.postId">
            <p>{{ comments.comments }}</p>
            <p>{{ comments.username }}</p>
            <p>{{ comments.postId }}</p>
          </div>
          
          <addComment /> -->
        </template>
      </Card>
    </div>
    <div class="row" v-else>
      <p class="lead">Loading...</p>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import addPost from "@/components/AddPost.vue";
import addComment from "@/components/AddComment.vue";

export default {
  data() {
    return {
      postContent: '',
      date: '',
      searchQuery: '', // Stores the user's search query
      posts: '',
      openComments: '',
      closeComments: {},
    };
  },
  components: {
    Card,
    addPost,
    addComment,
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
      return this.posts.filter(post =>
        post.content.toLowerCase().includes(query)
      );
    }
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
    updateDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      this.date = `${year}-${month}-${day}`;
    },
    openForm(){
      this.closeComments = {...this.comments};
      this.openComments = true
    },
    closeForm() {
      this.closeComments= {} ;
      this.openComments = false
    },
  },
}
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
.container {
  background-image: url('https://iili.io/JXZN74t.md.jpg');
}
.card-text {
  padding-left: 20px;
  text-align: left;
  font-size: medium;
  font-weight: 500;
  margin: 0;
}
.card-title {
  color: #a7926e
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
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  margin: 10px;
  background-color: #a7926e;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
}
.btn:hover {
  background-color: teal;
  color: #fff;
  transition: 1s;
  font-size: small;
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