import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  extendTheme,
  Button,
  ChakraProvider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const customTheme = extendTheme({
  fonts: {
    heading: "'Kimberley BL', sans-serif",
    body: "'Kimberley BL', sans-serif",
  },
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          fontFamily: "'Kimberley BL', sans-serif",
          color: 'white',
          _selected: {
            color: 'white',
            bg: 'orange.500',
          },
          _hover: {
            bg: 'orange.400',
          },
        },
        tablist: {
          borderBottom: '2px solid',
          borderColor: 'orange.500',
        },
        tabpanel: {
          borderTop: '2px solid',
          borderColor: 'orange.500',
        },
      },
    },
  },
});

export default function NavTabs() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p={4} bg="blue.800">
        <Flex justify="center" alignItems="center" mb={6} direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" alignItems="center" textAlign="center" flex="1">
            <Heading
              as="h1"
              size={{ base: '2xl', md: '4xl' }} // Adjusted size for mobile
              color="white"
              maxWidth="70%"
              mb={2}
              whiteSpace="nowrap" // Keeps text on one line
              overflow="hidden" // Prevents text overflow
              textOverflow="ellipsis" // Ellipsis for overflow
            >
              PLANISPHERE
            </Heading>
            <Text fontSize="2xl" color="orange.300" textAlign="center" mb={4}>
              WHERE EVERY EVENT FINDS ITS ORBIT
            </Text>
          </Flex>
          <Box mt={{ base: 4, md: 0 }} ml={{ base: 0, md: 4 }}>
            <Button as={Link} to="/loginPage">Login</Button>
          </Box>
        </Flex>

        <Tabs variant="enclosed">
          <TabList>
            <Tab>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Heading as="h1" size="sm" color="white">
                  Home
                </Heading>
              </Link>
            </Tab>
            <Tab>
              <Link to="/Budget" style={{ textDecoration: 'none' }}>
                <Heading as="h1" size="sm" color="white">
                  Budget
                </Heading>
              </Link>
            </Tab>
            <Tab>
              <Link to="/Task" style={{ textDecoration: 'none' }}>
                <Heading as="h1" size="sm" color="white">
                  Tasks
                </Heading>
              </Link>
            </Tab>
            <Tab>
              <Link to="/Venues" style={{ textDecoration: 'none' }}>
                <Heading as="h1" size="sm" color="white">
                  Venues
                </Heading>
              </Link>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </ChakraProvider>
  );
}
