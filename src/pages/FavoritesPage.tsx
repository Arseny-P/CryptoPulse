import useWatchlistStore from "../stores/useWatchlistStore"
import type { Coin } from "../types/coin";
import { useCoinsList } from "../hooks/useCoinsList";
import useConfigStore from "../stores/useConfigStore";
import { NavLink } from "react-router";
import Chart from "../components/ui/Chart";

const FavoritesPage = () => {
  const currency = useConfigStore(state => state.currency);
  const favoritesID = useWatchlistStore(state => state.favorites);
  const deleteFavorite = useWatchlistStore(state => state.deleteFavorite);
  const { data: coins, isLoading } = useCoinsList(currency);

  const filteredFavorites = coins?.filter(item => favoritesID.includes(item.id))

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Your Favorites</h1>
      {!filteredFavorites || filteredFavorites.length === 0 ? (
        <p>Your haven't favorite coins yet</p>
      ) : (
        <div className="favorites-grid">
          {filteredFavorites.map((c: Coin) => (
            <div key={c.id} className="coin-card">
              <NavLink to={"/coin/" + c.id}><h1 className="coin-card__title">{c.name}</h1></NavLink>
              <p className="coin-card__price">{c.current_price} {currency.toUpperCase()}</p>
              <button className="coin-card__button" onClick={() => deleteFavorite(c.id)}>Remove</button>

              {
                  c.sparkline_in_7d?.price &&
                  <Chart data={c.sparkline_in_7d?.price} />
                }
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage