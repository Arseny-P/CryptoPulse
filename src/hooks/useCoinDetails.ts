import { useQuery } from "@tanstack/react-query";
import { coinsApi } from "../api/coinsApi";

export function useCoinDetail(id: string) {
    return useQuery({
        queryKey: ["coin", id],
        queryFn: () => coinsApi.getCoinDetail(id),
        refetchInterval: 60000,
    })
}