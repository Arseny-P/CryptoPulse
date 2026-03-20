import useWatchlistStore from "../stores/useWatchlistStore";
import type { Coin } from "../types/coin";
import { useCoinsList } from "../hooks/useCoinsList";
import useConfigStore from "../stores/useConfigStore";
import { NavLink } from "react-router";
import Chart from "../components/Chart";
import { 
  Container, 
  Heading, 
  SimpleGrid, 
  Box, 
  Text, 
  Button, 
  Link as ChakraLink, 
  Flex,
  Center,
  Spinner,
  HStack,
  Avatar,
  Alert
} from "@chakra-ui/react";

const FavoritesPage = () => {
  const currency = useConfigStore(state => state.currency);
  const favoritesID = useWatchlistStore(state => state.favorites);
  const deleteFavorite = useWatchlistStore(state => state.deleteFavorite);
  const { data: coins, isPending, isError, error } = useCoinsList(currency);

  const filteredFavorites = coins?.filter(item => favoritesID.includes(item.id));

  if (isPending) {
    return (
      <Center py="20">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  if(isError) {
    return (
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Error</Alert.Title>
          <Alert.Description>
            {error.message}
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    )
  }

  return (
    <Container maxW="1200px" py="8">
      <Heading size="xl" mb="8">Your Favorites</Heading>
      
      {!filteredFavorites || filteredFavorites.length === 0 ? (
        <Text color="fg.muted" fontSize="lg">You haven't added any favorite coins yet.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          {filteredFavorites.map((c: Coin) => (
            <Box 
              key={c.id} 
              borderWidth="1px" 
              borderColor="border.subtle" 
              borderRadius="lg" 
              p="6" 
              shadow="sm" 
              bg="bg.panel"
            >
              <Flex justify="space-between" align="center" mb="4">
                <HStack gap="4">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback name="Coin icon"/>
                    <Avatar.Image src={c.image} />
                  </Avatar.Root>
                  <ChakraLink asChild _hover={{ textDecoration: "none" }}>
                    <NavLink to={"/coin/" + c.id}>
                      <Heading size="md" _hover={{ color: "blue.500" }} transition="color 0.2s">
                        {c.name}
                      </Heading>
                    </NavLink>
                  </ChakraLink>
                </HStack>
                <Text fontWeight="bold" fontSize="lg">
                  {c.current_price} {currency.toUpperCase()}
                </Text>
              </Flex>

              {c.sparkline_in_7d?.price && (
                <Box mb="4">
                  <Chart data={c.sparkline_in_7d?.price} />
                </Box>
              )}

              <Button 
                w="full"
                size="sm" 
                variant="outline"
                colorPalette="red"
                onClick={() => deleteFavorite(c.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default FavoritesPage;