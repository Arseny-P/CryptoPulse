import { Box, Heading, Text, Button, VStack, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.md" py="20">
      <VStack p={6} textAlign="center">
        <Heading size="4xl" color="blue.500">404</Heading>
        <Box>
          <Heading size="xl" mb="2">Ops! Page not found</Heading>
          <Text fontSize="lg" color="gray.500">
            It seems that this cryptocurrency has not been created yet or the link leads nowhere
          </Text>
        </Box>
        <Button 
          colorScheme="blue" 
          size="lg" 
          onClick={() => navigate("/main")}
        >
          Back to main page
        </Button>
      </VStack>
    </Container>
  );
};

export default NotFoundPage;