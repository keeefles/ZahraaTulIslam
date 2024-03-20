import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import Swal from "sweetalert2";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import { applyToken } from '../service/AuthenticateUser';
const ztiURL = "https://zahraatulislam.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    posts: null,
    post: null,
    comments: [],
    comment: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setPosts(state, value) {
      state.posts = value;
    },
    setPost(state, value) {
      state.post = value;
    },
    setComments(state, value) {
      state.comments = value;
    },
    setComment(state, value) {
      state.comment = value;
    },
  },
  actions: {
    async register(context, packet) {
      try {
        let { msg } = await (
          await axios.post(`${ztiURL}users/register`, packet)
        ).data;
        console.log(msg);
        context.dispatch("fetchUsers");
        sweet({
          title: "Registration",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${ztiURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, packet) {
      try {
        let { result } = (await axios.get(`${ztiURL}users/${packet.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, { id, data }) {
      console.log(id);
      try {
        let { update } = await axios.patch(`${ztiURL}users/update/${id}`, data);
        if (update) {
          // context.commit("setUser",);
          sweet({
            title: "Update user",
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to update user",
          icon: "error",
          timer: 2000,
        });
        console.error("error updating user:", e);
      }
    },
    async deleteUser({ commit, dispatch }, packet) {
      try {
        await axios.delete(`${ztiURL}users/delete/${packet.id}`);
        commit("setUsers");
        dispatch("fetchUsers");
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your profile has been deleted.",
              icon: "success"
            });
          }
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    // start of posts
    async addPost(context, packet) {
      try {
        let { msg } = await (
          await axios.post(`${ztiURL}posts/addpost`, packet)
        ).data;
        console.log(msg);
        context.dispatch("fetchPosts");
        sweet({
          title: "Registration",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchPosts(context) {
      try {
        let { results } = (await axios.get(`${ztiURL}posts`)).data;
        if (results) {
          context.commit("setPosts", results);
        }
      } catch (e) {
        console.log(e);
        sweet({
          title: "Error",
          text: "An error occurred when retrieving posts.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchPost(context, packet) {
      try {
        let { result } = (await axios.get(`${ztiURL}posts/${packet.id}`)).data;
        if (result) {
          context.commit("setPost", result);
        } else {
          sweet({
            title: "Retrieving a single post",
            text: "Post was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Post was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updatePost(context, { id, data }) {
      console.log(id);
      try {
        let { update } = await axios.patch(`${ztiURL}posts/update/${id}`, data);
        if (update) {
          context.commit("setPost");
          sweet({
            title: "Update post",
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to update post",
          icon: "error",
          timer: 2000,
        });
        console.error("error updating post:", e);
      }
    },
    async deletePost({ commit, dispatch }, packet) {
      try {
        await axios.delete(`${ztiURL}posts/delete/${packet.id}`);
        commit("setPosts");
        dispatch("fetchPosts");
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success"
            });
          }
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting post.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    // start of comments
    async addComment(context, packet) {
      try {
        let { msg } = await (
          await axios.post(`${ztiURL}comments/add`, packet)
        ).data;
        console.log(msg);
        context.dispatch("fetchComments");
        sweet({
          title: "Registration",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchComments(context) {
      try {
        let { results } = (await axios.get(`${ztiURL}comments`)).data;
        console.log(results);
        if (results) {
          context.commit("setComments", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving comments.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchComment(context, packet) {
      try {
        let { result } = (await axios.get(`${ztiURL}comments/${packet.id}`))
          .data;
        if (result) {
          context.commit("setComment", result);
        } else {
          sweet({
            title: "Retrieving a single comment",
            text: "Comment was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Comment was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateComment(context, { id, data }) {
      console.log(id);
      try {
        let { update } = await axios.patch(
          `${ztiURL}comments/update/${id}`,
          data
        );
        if (update) {
          context.commit("setComment");
          sweet({
            title: "Update comment",
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to update comment",
          icon: "error",
          timer: 2000,
        });
        console.error("error updating comment:", e);
      }
    },
    async deleteComment({ commit, dispatch }, packet) {
      try {
        await axios.delete(`${ztiURL}comments/delete/${packet.id}`);
        commit("setComments");
        dispatch("fetchComments");
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your comment has been deleted.",
              icon: "success"
            });
          }
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting comment.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    // login / logout
    async login(context, payload) {
      try {
        const response = await axios.post(
          "https://zahraatulislam.onrender.com/users/login",
          payload
        );
        const { msg, token, result } = response.data;

        if (token) {
          context.commit("setUser", result);
          applyToken(token);
          document.cookie = `AuthenticateUser=${JSON.stringify({
            msg,
            token,
            result,
          })}; path=/`;
          Swal.fire({
            title: msg,
            text: `Welcome back, ${result.firstName} ${result.lastName}`,
            icon: "success",
            timer: 2000,
          });

          router.push({ name: "profile" });
        } else {
          Swal.fire({
            title: "Info",
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("Error during login:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to login. Please try again later.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async logout({ commit }) {
      try {
        // Remove the 'userAuthenticated' cookie
        document.cookie = 'AuthenticateUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
        // Optionally, reset the user state
        commit('setUser', null);
    
        // Redirect the user to the login page or any other appropriate action
        router.push('/login');
    
        Swal.fire({
          title: 'Logout',
          text: 'You have been logged out successfully.',
          icon: 'success',
          timer: 2000,
        });
      } catch (error) {
        console.error('Error during logout:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to logout. Please try again later.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});
