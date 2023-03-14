// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        // 用户id
        id: "",
        // 用户头像
        avatar: "",
        // 用户昵称
        nickname: "",
        // 用户账号
        account: "",
        // 用户手机号
        mobile: "",
        // 用户token,最重要的
        token: "",
      },
    };
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUser(state, payload) {
      state.profile = payload;
    },
  },
};
