import { connection as zti } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/userAuthenticate.js";

class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT userId, firstName, lastName, username, userAge,
        emailAdd, userPass, mobileNumber
        FROM Users;
        `;
    zti.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const qry = `
        SELECT userId, firstName, lastName, username, userAge,
        emailAdd, userPass, mobileNumber
        FROM Users
        WHERE userId = ${req.params.id};
        `;
    zti.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // Payload
    let data = req.body;
    data.userPass = await hash(data?.userPass, 8);
    let user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const qry = `
        INSERT INTO Users
        SET ?;
        `;
    zti.query(qry, [data], (err) => {
      if (err) {
        console.error(err); // Log the actual error for debugging
        res.json({
          status: res.statusCode,
          msg: "Failed to register user. Please check the provided information.",
        });
      } else {
        // Create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.userPass) {
      data.userPass = await hash(data?.userPass, 8);
    }

    const qry = `
        UPDATE Users
        SET ?
        WHERE userId = ${req.params.id};
        `;
    zti.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user information is updated.",
      });
    });
  }
  deleteUser(req, res) {
    const qry = `
        DELETE FROM Users
        WHERE userId = ${req.params.id};
        `;
    zti.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user information has been removed.",
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const dbQry = `
            SELECT userId, firstName, lastName, username, userAge,
            emailAdd, userPass, mobileNumber
            from Users
            where emailAdd = '${emailAdd}';
            `;
    zti.query(dbQry, async (error, result) => {
      if (error) throw error;
      if (!result?.length) {
        res.json({
          status: res.errorCode,
          msg: "Incorrect email entered. Please try again",
        });
      } else {
        const validatePass = await compare(userPass, result[0].userPass);
        if (validatePass) {
          const token = createToken({
            emailAdd,
            userPass,
          });
          res.json({
            status: res.errorCode,
            msg: "Login Successful",
            token,
            result: result[0],
          });
        } else {
          res.json({
            status: res.errorCode,
            msg: "Incorrect password entered. Please try again.",
          });
        }
      }
    });
  }
}

export { Users };