import React from 'react';
import {
  Box, 
  Flex, 
  Link as ChakraLink,
  Heading, 
  Text, 
  Grid, 
  GridItem,
  Tabs, 
  TabList, 
  Tab, 
  extendTheme
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
//import LoginPage from './LoginPage';
//import RegisterPage from './RegisterPage';
import Footer from '../components/Footer';

// Load the Kimberley BL font
import "../shared/fonts/kimberley bl.otf";

const customTheme = extendTheme({
  fonts: {
    heading: "'Kimberley BL', sans-serif",
    body: "'Kimberley BL', sans-serif", // Apply the font to body text if needed
  },
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          fontFamily: "'Kimberley BL', sans-serif",
          color: 'white', // Set the default font color to white
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

export default function Home() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p={4} bg="blue.800">
        <Flex justify="center" alignItems="center" mb={6}>
          <Heading
            as="h1"
            size="4xl"
            color="white"
            textAlign="center"
            flex="1"
            width={{ base: "100%", md: "70%" }}
            maxWidth="70%"
          >
            PLANISPHERE
          </Heading>
        </Flex>

        <Text fontSize="2xl" mb={6} color="orange.300" textAlign="center">
          WHERE EVERY EVENT FINDS ITS ORBIT
        </Text>

        <Tabs variant="enclosed">
          <TabList>
            <Tab>
              <ChakraLink as={Link} to="/budget">Budget
            </Tab>
            <Tab> 
              <ChakraLink as={Link} to="/tasks">Tasks
            </Tab>
            <Tab>
              <ChakraLink as={Link} to="/venues">Venues
            </Tab>
          </TabList>
        </Tabs>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
              <Heading as="h3" size="md" color="white">BIRTHDAYS</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
              <Heading as="h3" size="md" color="white">BACHELOR + BACHELORETTE</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
              <Heading as="h3" size="md" color="white">WEDDINGS</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
              <Heading as="h3" size="md" color="white">GRADUATIONS</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
              <Heading as="h3" size="md" color="white">CREATE YOUR OWN EVENT</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center">
              <Heading as="h3" size="md" color="white">FUNERALS</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" height="100px"></Box>
            </Box>
          </GridItem>
        </Grid>

        <Footer mt={6} p={4} bg="blue.800" textAlign="center" />
      </Box>
    </ChakraProvider>
  );
}
