<template>
  <div>
    <h1>점심메뉴 목록</h1>
    <el-table :data="list" empty-text="메뉴가 없습니다" style="width: 100%">
      <el-table-column prop="lunchboxNo" label="번호" width="180">
      </el-table-column>
      <el-table-column prop="title" label="제목" width="180"> </el-table-column>
      <el-table-column prop="contents" label="내용" width="180">
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="create">
      등록
    </el-button>
  </div>
</template>

<script>
import lunchboxService from "@/service/api/api-lunchbox";

export default {
  name: "List",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 목록 조회
    getList() {
      lunchboxService.list({}).then(response => {
        this.list = response.data;
      });
    },
    // 등록
    create() {
      this.$router.push("/create");
    }
  }
};
</script>
