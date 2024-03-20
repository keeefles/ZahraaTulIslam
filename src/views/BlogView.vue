<template>
  <div class="container">
    <div class="row" v-if="posts">
      <Card v-for="post in posts" :key="post.postId">
        <template #card-header>
          <h4 class="card-title">{{ posts.username }}</h4>
        </template>
        <template #card-body>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            {{ posts.content }}
          </p>
          <button class="btn" @click="comments">
            Comment
          </button>
          <button class="btn">
            <router-link to="/feed"></router-link>
          </button>
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

export default {
  components: {
    Card,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchComments");
  },
  methods: {
    
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.btn {
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  margin: 10px;
  background-color: teal;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
}
/* .btn:hover {
  background-color: ;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
  margin: 10px;
} */
</style>