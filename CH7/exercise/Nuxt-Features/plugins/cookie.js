import Cookies from "js-cookie";
export default ({ app }, inject) => {
  inject("cookies", {
    set: (name, value = {}, expires = { expires: 365 }) => {
      Cookies.set(name, value, expires);
    },
    get: name => {
      const val = Cookies.get(name);
      try {
        return JSON.parse(val);
      } catch (err) {
        return undefined;
      }
    },
    remove: name => {
      Cookies.remove(name);
    },
    removeAll: () => {
      const NodeList = Object.keys(Cookies.get());
      NodeList.forEach(el => Cookies.remove(el));
      window.location.replace("/");
    }
  });
};
