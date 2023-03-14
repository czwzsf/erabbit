import { createStore } from "vuex";
// 导入模块
import user from "./modules/user";
import category from "./modules/category";
import cart from "./modules/cart";
// vuex持久化
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    user,
    cart,
    category,
  },
  // vuex持久化
  plugins: [
    createPersistedState({
      key: "erabbit",
      paths: ["user", "cart"],
    }),
  ],
});
