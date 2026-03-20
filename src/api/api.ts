import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/",
    params: {
        x_cg_demo_api_key: import.meta.env.VITE_COINGECKO_API_KEY,
    }
});