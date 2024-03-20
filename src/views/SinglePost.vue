<template>
  <addPost />
  <div class="container">
    <div class="row" v-if="post">
      <Card v-for="post in post" :key="post.postId">
        <template #card-header>
          <h4 class="card-title">{{ post.username }}</h4>
        </template>
        <template #card-body>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            {{ post.content }}
          </p>
          <router-link to="/feed"> View posts </router-link>
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

export default {
  components: {
    Card,
    addPost,
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPost");
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  /* color: inherit; */
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
</style>