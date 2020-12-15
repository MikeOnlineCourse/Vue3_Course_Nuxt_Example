export default ({ app }, inject) => {
  inject("localStorage", {
    set(key = "", val = {}) {
      localStorage.setItem(key, JSON.stringify(val));
    },
    get(key = "") {
      const obj = JSON.parse(localStorage.getItem(key));
      if (!obj) return {};
      return obj;
    },
    remove(key = "") {
      localStorage.removeItem(key);
    },
    removeAll() {
      localStorage.clear();
    }
  });
};
