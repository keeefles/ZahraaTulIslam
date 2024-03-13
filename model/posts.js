import { connection as zti } from "../config/index.js";

class Posts {
  fetchPosts(req, res) {
    const qry = `
        SELECT postId, username, comments, content
        FROM Posts;
        `;
    zti.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchPost(req, res) {
    const qry = `
        SELECT postId, username, comments, content
        FROM Posts;
        WHERE postId = ${req.params.id};
        `;
    zti.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  createPost(req, res) {
    const qry = `
        INSERT INTO Posts
        SET ?;
        `;
    zti.query(qry, [req.body], (err) => {
      if (err) throw err;
      console.log(err);
      res.json({
        status: res.statusCode,
        msg: "New post was added",
      });
    });
  }
  updatePost(req, res) {
    const qry = `
        UPDATE Posts
        SET ?
        WHERE postID = ${req.params.id};
        `;
    zti.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The post has been updated.",
      });
    });
  }
  deletePost(req, res) {
    const qry = `
        DELETE FROM Posts
        WHERE postId = ${req.params.id};
        `;
    zti.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The post has been removed.",
      });
    });
  }
}

export { Posts };