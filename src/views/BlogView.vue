<template>
  <div class="container">
    <div class="row">
    </div>
    <div class="row" v-if="products">
      <Card v-for="product in products" :key="product.prodID">
        <template #card-header>
          <h4 class="card-title">{{ product.prodName }}</h4>
        </template>
        <template #card-body>
          <img :src="product.prodURL" alt="lingerie" />
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            {{ product.prodDesc }}
          </p>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            R{{ post.comments }}
          </p>
          <router-link
            class="btn buttonPad"
            :to="{ name: 'post', params: { id: post.postId } }"
            >View More</router-link
          >
        </template>
      </Card>
    </div>
    <div class="row" v-else>
      <p class="lead">Loading...</p>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "BlogView.vue",
  components: {
    Card,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped>
img {
  width: 200px;
  aspect-ratio: 1/1.25;
}
.btn {
  border-radius: 30px;
  color: #fff;
  background-color: #4e96d3;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
}
.btn:hover {
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px;
}
.card {
  margin: 20px auto;
  height: auto;
  border-radius: 15px;
}
.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #4e96d3;
}
.card-img-top {
  height: 160px;
  width: 18rem;
  display: flex;
  margin: auto;
}
</style>