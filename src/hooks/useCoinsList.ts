import { coinsApi } from '../api/coinsApi'
import { useQuery } from '@tanstack/react-query'

export function useCoinsList(currency: string) {
    return useQuery({
        queryKey: ["coins", currency],
        queryFn: () => coinsApi.getCoins(currency),
        refetchInterval: 60000,
    })
}