import { connection as zti } from "../config/index.js";

class Comments {
  fetchComments(req, res) {
    const qry = `
        SELECT postId, commentId, comments
        FROM Comments;
        `;
    zti.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchComment(req, res) {
    const qry = `
        SELECT postId, commentId, comments
        FROM Comments;
        WHERE commentId = ${req.params.id};
        `;
    zti.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  createComment(req, res) {
    const qry = `
        INSERT INTO Comments
        SET ?;
        `;
    zti.query(qry, [req.body], (err) => {
      if (err) throw err;
      console.log(err);
      res.json({
        status: res.statusCode,
        msg: "New comment was added",
      });
    });
  }
  updateComment(req, res) {
    const qry = `
        UPDATE Comments
        SET ?
        WHERE commentId = ${req.params.id};
        `;
    zti.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Comment has been updated.",
      });
    });
  }
  deletePost(req, res) {
    const qry = `
        DELETE FROM Comments
        WHERE commentId = ${req.params.id};
        `;
    zti.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Comment has been removed.",
      });
    });
  }
}

export { Comments };