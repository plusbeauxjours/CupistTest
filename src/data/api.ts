import axios from "axios";

export const callApi = async (path: string) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const baseUrl =
    "https://my-json-server.typicode.com/plusbeauxjours/CupistTestServer/";
  const fullUrl = `${baseUrl}${path}`;
  console.log(fullUrl, { headers });

  return axios.get(fullUrl, { headers });
};
