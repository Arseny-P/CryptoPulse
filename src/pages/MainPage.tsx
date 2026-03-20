import { Container } from '@chakra-ui/react';
import CoinsTable from '../components/CoinsTable';
import useConfigStore from '../stores/useConfigStore';

const MainPage = () => {
  const currency = useConfigStore((state) => state.currency);
  
  return (
    <Container maxW="1200px" py="8">
      <CoinsTable currency={currency} />
    </Container>
  );
};

export default MainPage;