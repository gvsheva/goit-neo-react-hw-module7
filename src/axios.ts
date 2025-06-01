import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://683c52eb28a0b0f2fdc6cebd.mockapi.io/contacts",
});
