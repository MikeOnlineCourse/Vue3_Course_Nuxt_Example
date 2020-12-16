export default function({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      // redirect("/sorry");
      console.log("處理錯誤500");
    }
    if (error.response.status === 404) {
      // redirect("/404");
      console.log("處理錯誤404");
    }
  });
}
