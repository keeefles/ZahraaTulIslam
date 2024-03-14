import { Users } from "./users.js";
import { Posts } from "./posts.js";
import { Comments } from "./comments.js";

let users = new Users()
let posts = new Posts()
let comments = new Comments()

export{
    users, 
    posts,
    comments
}