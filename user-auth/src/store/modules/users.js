import axios from "axios";

const state = {
  user: {},
};

const getters = {
  user: (state) => state.user,
};

const actions = {
  async signup({ commit }, user) {
    const response = await axios.post("http://localhost:8000/signup", {
      user,
    });
    console.log(response);
    commit("newUser", response.data);
  },

  async login({ commit }, user) {
    const response = await axios.post("http://localhost:8000/login", {
      user,
      completed: false,
    });

    commit("loginUser", response.data);
  },
};

const mutations = {
  loginUser: (state, user) => (state.user = user),
  newUser: (state, user) => (state.user = user),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
