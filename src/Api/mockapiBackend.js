import axios from "axios";

axios.defaults.baseURL = "https://63a2db089704d18da07e574d.mockapi.io";

export async function fetchUsers() {
  const response = await axios.get("/users");

  return response.data;
}
