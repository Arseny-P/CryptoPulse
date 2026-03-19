import useConfigStore from '../stores/useConfigStore'

const Header = () => {
    const darkTheme = useConfigStore((state) => state.darkTheme);
    const switchTheme = useConfigStore((state) => state.switchTheme);

    const currency = useConfigStore((state) => state.currency);
    const switchCurrency = useConfigStore((state) => state.switchCurrency);
  return (
    <div className='header__container'>
        <h1>CryptoPulse</h1>
        <button onClick={switchTheme}>{darkTheme ? "Темно" : "Светло"}</button>
        <button disabled={currency == "usd"} onClick={switchCurrency}>USD</button>
        <button disabled={currency == "eur"} onClick={switchCurrency}>EUR</button>
    </div>
  )
}

export default Header