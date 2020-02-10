<template>
  <el-form>
    <el-form-item label="제목">
      <el-input type="text" v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="내용">
      <el-input type="text" v-model="contents"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="create">등록하기</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import lunchboxService from "@/service/api/api-lunchbox";

export default {
  name: "Create",
  data() {
    return {
      title: "",
      contents: ""
    };
  },
  methods: {
    // 등록
    create() {
      lunchboxService.create(this.title, this.contents).then(() => {
        this.$router.push("/list");
      });
    }
  }
};
</script>
