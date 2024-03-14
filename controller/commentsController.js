import express from "express";
import bodyParser from "body-parser";
import { comments } from "../model/index.js";

const commentRouter = express.Router();

commentRouter.get("/", (req, res) => {
  try {
    comments.fetchComments(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve comments",
    });
  }
});

commentRouter.get("/:id", (req, res) => {
  try {
    comments.fetchComment(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a comment.",
    });
  }
});

commentRouter.post("/add", bodyParser.json(), (req, res) => {
  try {
    comments.addComment(req, res);
  } catch (e) {
    console.error(e);
    res.json({
      status: res.statusCode,
      msg: "Failed to add a new comment.",
    });
  }
});

commentRouter.patch("/update/:id", bodyParser.json(), (req, res) => {
  try {
    comments.updateComment(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update comment.",
    });
  }
});

commentRouter.delete("/delete/:id", (req, res) => {
  try {
    comments.deleteComment(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete comment",
    });
  }
});

export { commentRouter };
