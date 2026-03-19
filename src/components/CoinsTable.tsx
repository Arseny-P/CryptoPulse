import { useCoinsList } from "../hooks/useCoinsList"

const CoinsTable = ({currency} : {currency: string}) => {
    const coinsList = useCoinsList(currency);

  console.log(coinsList);
  return (
    <>
    {
        coinsList?.map(item => (
            <div key={item.id} className='Coin'>
                <h1>{item.name}</h1>
                <h2>{item.symbol}</h2>
            </div>
        ))
    }
    </>
    
  )
}

export default CoinsTable