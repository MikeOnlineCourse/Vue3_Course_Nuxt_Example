import { apiPostLoginRequest, apiPostTestToken } from "../api";

// state
export const state = () => ({
  isLogin: false
});

// actions
export const actions = {
  handIsLogin({ commit }, bool) {
    commit("handIsLogin", bool);
  },
  async handAuth({ commit }, payload) {
    const { username, password } = payload;
    try {
      const res = await apiPostLoginRequest({ username, password });
      commit("LoginAuth", res);
    } catch (error) {
      console.log(error);
    }
  },
  async HandToken({ commit }, payload) {
    const { token } = payload;
    try {
      const res = await apiPostTestToken(token);
      commit("HandToken");
    } catch (error) {
      console.log(error);
      commit("handIsLogin", false);
      this.$cookies.removeAll();
    }
  }
};

// mutations
export const mutations = {
  LoginAuth(state, res) {
    console.log(res.data);
    this.$cookies.set("auth", { token: res.data.token });
    state.isLogin = true;
  },
  handIsLogin(state, bool) {
    state.isLogin = bool;
  },
  HandToken(state) {
    console.log("ok");
  }
};

// getters
export const getters = {
  loginStatue: state => state.isLogin
};
