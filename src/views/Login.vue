<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <el-form label-width="120px">
        <el-form-item label="아이디" prop="adminId">
          <el-input type="text" v-model="adminId"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호" prop="adminPw">
          <el-input type="password" v-model="adminPw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">로그인</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
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
