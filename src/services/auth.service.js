import axios from "axios";
import uri from "./func_global_url";
const API_URL = uri.url();

class AuthService {
  login(user) {
        return axios
          .post(API_URL + "api/auth/get-invitation", {
            mobile_no: user.mobile_no,
          },{ headers: { "Access-Control-Allow-Origin": "*", }})
          .then((response) => {
            if (response == 401 || response == 400) {
              return response;
            } else {
              if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
              }
              return response.data;
            }
          })
          .catch((error) => {
            if (error.response.status) {
              localStorage.setItem(
                "user",
                JSON.stringify(error.response.status)
              );
            }
            return error.response.status;
          });
  }
  logout() {
    localStorage.removeItem("user");
  }

}
export default new AuthService();
