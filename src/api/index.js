import axios from "axios";
const journalApi = axios.create({
  baseURL: "https://5f826f3d06957200164334ca.mockapi.io/api",
});
export default journalApi;
