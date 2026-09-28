import axios from "axios";

const CredentialsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC,
  withCredentials: true,
});

export default CredentialsApi;