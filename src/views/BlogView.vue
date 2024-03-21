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
          <router-link id="card-footer" :to="{ name: 'comments', params: {id: post.postId }}">View More</router-link>
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
  data() {
    return {
      postContent: '',
      date: ''
    };
  },
  components: {
    Card,
    addPost
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
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
    }
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