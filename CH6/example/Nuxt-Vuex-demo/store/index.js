import { apiGetPhotoData } from "../api";
export const state = () => ({
  idx: 0
});
// actions
export const actions = {
  handAddCount({ commit }) {
    commit("AddCount");
  },
  async handApiData({ commit }) {
    try {
      const res = await apiGetPhotoData();
      commit("AddCount", { data: res.data });
    } catch (error) {
      // 錯誤處理
      console.log("錯誤處理:", error);
      this.$notify({
        group: "foo",
        title: "API資料錯誤",
        type: "error",
        text: error
      });
    }
  }
};
// mutations
export const mutations = {
  AddCount(state) {
    state.idx++;
  }
};
// getters
export const getters = {
  getIdx: state => {
    return `count: ${state.idx}`;
  }
};
