import {create} from "zustand"
import { persist } from "zustand/middleware";

type watchlistStore = {
    favorites: string[],
    addFavorite: (coin: string) => void,
    deleteFavorite: (coin: string) => void
}

const useWatchlistStore = create<watchlistStore>()(
    persist(
        (set) => ({
            favorites: [],
            addFavorite: (coin: string) => set((state) => ({favorites: state.favorites.includes(coin) ? state.favorites : [...state.favorites, coin]})),
            deleteFavorite: (coin: string) => set((state) => ({favorites: state.favorites.filter((obj) => obj != coin)})),
        }),
        {name: "watch-store"}
    ),
);

export default useWatchlistStore;