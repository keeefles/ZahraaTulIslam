import express from "express";
import bodyParser from "body-parser";
import { posts } from "../model/index.js";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  try {
    posts.fetchPosts(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve posts",
    });
  }
});

postRouter.get("/:id", (req, res) => {
  try {
    posts.fetchPost(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a post",
    });
  }
});

postRouter.post("/addpost", bodyParser.json(), (req, res) => {
  try {
    posts.createPost(req, res);
  } catch (e) {
    console.error(e);
    res.json({
      status: res.statusCode,
      msg: "Failed to add a new post.",
    });
  }
});

postRouter.patch("/update/:id", bodyParser.json(), (req, res) => {
  try {
    posts.updatePost(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a post",
    });
  }
});

postRouter.delete("/delete/:id", (req, res) => {
  try {
    posts.deletePost(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete a post",
    });
  }
});

export { 
    postRouter
};
