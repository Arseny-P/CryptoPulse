import CoinsTable from '../components/CoinsTable'
import useConfigStore from '../stores/useConfigStore'

const MainPage = () => {
  const currency = useConfigStore((state) => state.currency);
  return (
      <CoinsTable currency={currency}/>
  )
}

export default MainPage