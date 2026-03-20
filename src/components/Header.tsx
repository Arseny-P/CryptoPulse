import { NavLink } from 'react-router';
import { 
  Box, 
  Flex, 
  Heading, 
  Button, 
  HStack, 
  Link as ChakraLink 
} from '@chakra-ui/react';
import { useColorMode } from '@/components/ui/color-mode';
import useConfigStore from '../stores/useConfigStore';
import { useEffect } from 'react';

const Header = () => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  
  const darkTheme = useConfigStore((state) => state.darkTheme);
  const switchTheme = useConfigStore((state) => state.switchTheme);
  const currency = useConfigStore((state) => state.currency);
  const switchCurrency = useConfigStore((state) => state.switchCurrency);

  useEffect(() => {
    const nextMode = darkTheme ? 'dark' : 'light';
    if (colorMode !== nextMode) {
      setColorMode(nextMode);
    }
  }, [darkTheme, setColorMode, colorMode]);

  return (
    <Box 
      as="header" 
      px="8" 
      py="4" 
      shadow="md" 
      borderBottomWidth="1px" 
      borderColor="border.subtle"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg.panel"
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading size="2xl" color="blue.500" letterSpacing="tighter">
          CryptoPulse
        </Heading>

        <HStack gap="6">
          <HStack gap="4">
            <ChakraLink 
              asChild 
            >
              <NavLink to="/main">Main</NavLink>
            </ChakraLink>
            
            <ChakraLink 
              asChild
            >
              <NavLink to="/favorite">Favorites</NavLink>
            </ChakraLink>
          </HStack>

          <HStack gap="2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { switchTheme(); toggleColorMode(); }}
            >
              {colorMode === 'dark' ? "🌙" : "☀️"}
            </Button>
            
            <Button 
              size="sm" 
              colorPalette="blue"
              variant={currency === 'usd' ? 'solid' : 'outline'} 
              onClick={switchCurrency}
            >
              USD
            </Button>
            <Button 
              size="sm" 
              colorPalette="blue"
              variant={currency === 'eur' ? 'solid' : 'outline'} 
              onClick={switchCurrency}
            >
              EUR
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;