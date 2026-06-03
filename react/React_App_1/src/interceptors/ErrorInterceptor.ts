import axios from "axios";

export function ErrorInterceptor() {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      alert(error.message);
      throw error;
    }
  );
}
