<template>
  <div>
    아이디 :
    <input type="text" v-model="adminId" />
    <br />
    비밀번호 :
    <input type="password" v-model="adminPw" />
    <br />
    <button type="button" @click="login">로그인</button>
  </div>
</template>

<script>
import authService from "@/service/api/api-auth";

export default {
  name: "Login",
  data() {
    return {
      adminId: "",
      adminPw: ""
    };
  },
  methods: {
    // 로그인 호출
    login() {
      authService.login(this.adminId, this.adminPw).then(function(response) {
        console.log("로그인 성공", response.data);
      });
    }
  }
};
</script>

<style scoped></style>
