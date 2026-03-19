import { NavLink, useNavigate, useParams } from "react-router"
import { useCoinDetail } from "../hooks/useCoinDetails";
import useConfigStore from "../stores/useConfigStore";
import Chart from "../components/ui/Chart";

const CoinPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currency = useConfigStore(state => state.currency);
  const {data: details} = useCoinDetail(id!);
  return (
    <>
        <NavLink to={'..'} onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}>Go back</NavLink>
        <div className="coin-card">
            <h1 className="coin-card__title">{details?.name}</h1>
            <img src={details?.image.small} />
            <p className="coin-card__price">{details?.description.en}</p>
            <p>{currency == "usd" ? details?.market_data.current_price.usd : details?.market_data.current_price.eur} {currency.toUpperCase()}</p>
            {
                details?.market_data?.sparkline_7d &&
                <Chart data={details?.market_data?.sparkline_7d?.price} />
            }
        </div>
    </>
  )
}

export default CoinPage