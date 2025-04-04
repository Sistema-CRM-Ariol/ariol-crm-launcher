import axios from "axios";

const apiDb = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Accept: 'application/json'
    }
});

export default apiDb;