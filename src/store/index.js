import Vue from "vue";
import Vuex from "vuex";

import authService from "@/service/api/api-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminNm: "",
    token: ""
  },
  mutations: {
    // 관리자 정보를 저장
    setAdmin(state, adminInfo) {
      state.adminNm = adminInfo.adminNm;
      state.token = adminInfo.token;
    }
  },
  actions: {
    // 로그인
    login(context, adminParam) {
      // 1. 로그인 API 호출
      return authService
        .login(adminParam.adminId, adminParam.adminPw)
        .then(function(response) {
          console.log("로그인 성공", response.data);
          // 2. 로그인이 성공하면 결과 값을 state에 반영
          context.commit("setAdmin", {
            adminNm: response.data.adminNm,
            token: response.data.token
          });
        });
    }
  }
});
