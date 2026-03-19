export type CoinDetail = {
    id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
  };
  image: {
    large: string;
    small: string;
  };
  
  market_data: {
    current_price: {
      usd: number;
      eur: number;
    };
    market_cap: {
      usd: number;
      eur: number;
    };
    total_volume: {
      usd: number;
      eur: number;
    };
    high_24h: {
      usd: number;
      eur: number;
    };
    low_24h: {
      usd: number;
      eur: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    
    sparkline_7d: {
      price: number[];
    };
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
  };
  coingecko_rank: number;
}