import { NavLink, useNavigate, useParams } from "react-router";
import { useCoinDetail } from "../hooks/useCoinDetails";
import useConfigStore from "../stores/useConfigStore";
import Chart from "../components/Chart";
import { 
  Container, 
  Box, 
  Heading, 
  Text, 
  Image,
  Flex, 
  Link as ChakraLink 
} from "@chakra-ui/react";

const CoinPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currency = useConfigStore(state => state.currency);
  const { data: details } = useCoinDetail(id!);

  return (
    <Container maxW="800px" py="8">
      <ChakraLink asChild mb="6" display="inline-block" color="blue.500">
        <NavLink to=".." onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}>
          ← Go back
        </NavLink>
      </ChakraLink>

      <Box 
        borderWidth="1px" 
        borderColor="border.subtle" 
        borderRadius="xl" 
        p={{ base: 6, md: 10 }} 
        shadow="md" 
        bg="bg.panel"
      >
        <Flex align="center" gap="4" mb="6">
          <Image 
            src={details?.image.small} 
            alt={details?.name} 
            boxSize="64px" 
            borderRadius="full" 
          />
          <Heading size="2xl">{details?.name}</Heading>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb="6">
          {currency === "usd" 
            ? details?.market_data.current_price.usd 
            : details?.market_data.current_price.eur} {currency.toUpperCase()}
        </Text>

        {details?.market_data?.sparkline_7d && (
          <Box mt="8" mb="8" h="200px" w="full">
            <Chart data={details?.market_data?.sparkline_7d?.price} />
          </Box>
        )}

        <Text color="fg.muted" lineHeight="tall">
          {details?.description.en.split('. ')[0]}.
        </Text>
      </Box>
    </Container>
  );
};

export default CoinPage;