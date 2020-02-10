<template>
  <div>
    아이디 :
    <input type="text" v-model="adminId" />
    <br />
    비밀번호 :
    <input type="password" v-model="adminPw" />
    <br />
    <button type="button" @click="login">로그인</button>
    <br />
    <br />
    <span>로그인 된 관리자 : {{ adminNm }}</span>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      adminId: "",
      adminPw: ""
    };
  },
  computed: {
    adminNm() {
      return this.$store.state.adminNm;
    }
  },
  methods: {
    // 로그인 호출
    login() {
      this.$store
        .dispatch("login", {
          adminId: this.adminId,
          adminPw: this.adminPw
        })
        .then(() => {
          // 로그인 성공
          this.$router.push("/list");
        });
    }
  }
};
</script>

<style scoped></style>
