import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("🔥 API URL =", API_URL);

const CredentialsApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export default CredentialsApi;