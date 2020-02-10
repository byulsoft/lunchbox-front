<template>
  <div></div>
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
    }
  }
};
</script>
