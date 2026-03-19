import { api } from "./api";
import { type Coin } from "../types/coin";
import type { CoinDetail } from "../types/coinDetail";


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
    },

    getCoinDetail: async (id: string): Promise<CoinDetail> => {
        const { data } = await api.get<CoinDetail>(`/coins/${id}`, {
            params: {
                localization: false,
                tickers: true,
                market_data: true,
                community_data: true,
                developer_data: true,
                sparkline: true,
            },
        });
        return data;
    }
};