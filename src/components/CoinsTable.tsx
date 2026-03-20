import { NavLink } from "react-router";
import { useCoinsList } from "../hooks/useCoinsList";
import useWatchlistStore from "../stores/useWatchlistStore";
import Chart from "./Chart";
import { 
  SimpleGrid, 
  Box, 
  Heading, 
  Text, 
  Button, 
  Link as ChakraLink, 
  Flex,
  Avatar,
  HStack
} from "@chakra-ui/react";

const CoinsTable = ({ currency }: { currency: string }) => {
  const { data: coinsList } = useCoinsList(currency);
  const addFavorite = useWatchlistStore(state => state.addFavorite);
  const deleteFavorite = useWatchlistStore(state => state.deleteFavorite);
  const favoritesID = useWatchlistStore(state => state.favorites);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
      {coinsList?.map(coin => {
        const isFavorite = favoritesID.includes(coin.id);

        return (
          <Box 
            key={coin.id} 
            borderWidth="1px" 
            borderColor="border.subtle" 
            borderRadius="lg" 
            p="6" 
            shadow="sm" 
            bg="bg.panel"
            transition="all 0.2s"
            _hover={{ shadow: "md" }}
          >
            <Flex justify="space-between" align="center" mb="4">
              <HStack gap="4">
                <Avatar.Root size="sm">
                  <Avatar.Fallback name="Coin icon"/>
                  <Avatar.Image src={coin.image} />
                </Avatar.Root>
                <ChakraLink asChild _hover={{ textDecoration: "none" }}>
                  <NavLink to={"/coin/" + coin.id}>
                    <Heading size="md" _hover={{ color: "blue.500" }} transition="color 0.2s">
                      {coin.name}
                    </Heading>
                  </NavLink>
                </ChakraLink>
              </HStack>
              <Text fontWeight="bold" fontSize="lg">
                {coin.current_price} {currency.toUpperCase()}
              </Text>
            </Flex>

            {coin.sparkline_in_7d?.price && (
              <Box mb="4">
                <Chart data={coin.sparkline_in_7d?.price} />
              </Box>
            )}

            <Button 
              w="full"
              size="sm" 
              variant={isFavorite ? "outline" : "solid"} 
              colorPalette={isFavorite ? "red" : "blue"}
              onClick={() => isFavorite ? deleteFavorite(coin.id) : addFavorite(coin.id)}
            >
              {isFavorite ? "Remove favorite" : "Add favorite"}
            </Button>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default CoinsTable;