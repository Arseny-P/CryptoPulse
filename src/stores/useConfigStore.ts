import {create} from "zustand"
import { persist } from "zustand/middleware";

type configStore = {
    darkTheme: boolean,
    switchTheme: () => void,

    currency: "usd" | "eur",
    switchCurrency: () => void,
}

const useConfigStore = create<configStore>()(
    persist(
        (set) => ({
            darkTheme: false,
            switchTheme: () => set((state) => ({darkTheme: !state.darkTheme})),

            currency: "usd",
            switchCurrency: () => set((state) => ({currency: state.currency == "usd" ? "eur" : "usd"})),
        }),
        {name: "config-store"}
    ),
);

export default useConfigStore;