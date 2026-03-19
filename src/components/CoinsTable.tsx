import { NavLink } from "react-router";
import { useCoinsList } from "../hooks/useCoinsList"
import useWatchlistStore from "../stores/useWatchlistStore";
import Chart from "./ui/Chart";

const CoinsTable = ({currency} : {currency: string}) => {
  const {data: coinsList} = useCoinsList(currency);
  const addFavorite = useWatchlistStore(state => state.addFavorite);
  const deleteFavorite = useWatchlistStore(state => state.deleteFavorite);
  const favoritesID = useWatchlistStore(state => state.favorites);

  return (
    <>
    {
        coinsList?.map(coin => (
            <div key={coin.id} className="coin-card">
                <NavLink to={"/coin/" + coin.id}><h1 className="coin-card__title">{coin.name}</h1></NavLink>
                <p className="coin-card__price">{coin.current_price} {currency.toUpperCase()}</p>
                {favoritesID.includes(coin.id) ? (
                  <button className="coin-card__button" onClick={() => deleteFavorite(coin.id)}>Remove favorite</button>
                ) : (
                  <button className="coin-card__button" onClick={() => addFavorite(coin.id)}>Add favorite</button>
                )}

                {
                  coin.sparkline_in_7d?.price &&
                  <Chart data={coin.sparkline_in_7d?.price} />
                }
                
            </div>
        ))
    }
    </>
    
  )
}

export default CoinsTable