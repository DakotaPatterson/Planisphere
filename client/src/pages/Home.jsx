import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  extendTheme,
  Image,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';

// Load the Kimberley BL font
import "../shared/fonts/kimberley bl.otf";

// Import images
import weddingDalmatians from "../shared/images/wedding.png";
import llamaDeath from "../shared/images/funerals.png";

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
            <Tab>Budget</Tab>
            <Tab>Tasks</Tab>
            <Tab>Venues</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                <GridItem>
                  <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                    <Heading as="h3" size="md">Budget Details</Heading>
                    <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px">
                      {/* Budget tab content goes here */}
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                <GridItem>
                  <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                    <Heading as="h3" size="md">Task Management</Heading>
                    <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px">
                      {/* Tasks tab content goes here */}
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                <GridItem>
                  <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" color="white">
                    <Heading as="h3" size="md">Venue Selection</Heading>
                    <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px">
                      {/* Venues tab content goes here */}
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {/* Weddings Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  WEDDINGS
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={weddingDalmatians} alt="Wedding Dalmatians" w="100%" h="100%" objectFit="cover" />
              </Box>
            </Box>
          </GridItem>
          
          {/* Funerals Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  FUNERALS
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={llamaDeath} alt="Llama Funeral" w="100%" h="100%" objectFit="cover" />
              </Box>
            </Box>
          </GridItem>

          {/* Placeholder Boxes */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Heading as="h3" size="md" color="white">BIRTHDAYS</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Heading as="h3" size="md" color="white">BACHELOR + BACHELORETTE</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Heading as="h3" size="md" color="white">GRADUATIONS</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Heading as="h3" size="md" color="white">CREATE YOUR OWN EVENT</Heading>
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px"></Box>
            </Box>
          </GridItem>
        </Grid>

        <Footer mt={6} p={4} bg="blue.800" textAlign="center" />
      </Box>
    </ChakraProvider>
  );
}
