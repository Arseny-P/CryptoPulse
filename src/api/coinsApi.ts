import { api } from "./api";
import { type Coin } from "../types/coin";


export const coinsApi = {
    getCoins: async (currency: string): Promise<Coin[]> => {
        const { data } = await api.get<Coin[]>("/coins/markets", {
            params: {
            vs_currency: currency,
            order: "market_cap_desc",
            per_page: 50,
            page: 1,
            sparkline: true,
            price_change_percentage: "24h",
            },
        });
        return data;
    }
};

// далее здесь можно будет писать образение к сервису для получения информации по одной монете или подробную информацию о разменах и тд.