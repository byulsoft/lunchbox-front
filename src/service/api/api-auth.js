import request from "./api-service";

const authService = {
  login(adminId, adminPw) {
    return request.post("/auth/login", {
      adminId,
      adminPw
    });
  }
};

export default authService;
