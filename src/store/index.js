import { createStore } from "vuex";
// 导入模块
import user from "./modules/user";
import category from "./modules/category";
import cart from "./modules/cart";

export default createStore({
  modules: {
    user,
    cart,
    category,
  },
});
