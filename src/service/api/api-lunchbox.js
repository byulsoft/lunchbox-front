import request from "./api-service";
import store from "@/store";

const lunchboxService = {
  // 점심메뉴 목록 조회
  list(condition) {
    return request.get("/lunchbox/list", {
      params: {
        condition
      },
      headers: {
        "x-token": store.state.token
      }
    });
  },
  // 점심메뉴 등록
  create(title, contents) {
    return request.post(
      "/lunchbox/create",
      {
        title,
        contents
      },
      {
        headers: {
          "x-token": store.state.token
        }
      }
    );
  }
};

export default lunchboxService;
