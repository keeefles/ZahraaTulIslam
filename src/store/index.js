import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import AuthenticateUser from "../service/AuthenticateUser";
const ztiURL = "https://zahraatulislam.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    posts: null,
    post: null,
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
      state.products = value;
    },
    setPost(state, value) {
      state.product = value;
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
        sweet({
          title: "Delete user",
          icon: "success",
          timer: 2000,
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
    async login(context, packet) {
      try {
        const { msg, token, result } = (
          await axios.post(`${ztiURL}users/login`, packet)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set("LegitUser", {
            msg,
            token,
            result,
          });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back,
            ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  modules: {},
});