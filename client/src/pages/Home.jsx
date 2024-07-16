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
  extendTheme,
  Image,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Import pages
import Budget from '../pages/Budget'; // Adjust the path based on your project structure
import Task from '../pages/Task'; // Adjust the path based on your project structure
import Venues from '../pages/Venues'; // Adjust the path based on your project structure

// Load the Kimberley BL font
import "../shared/fonts/kimberley bl.otf";

// Import images
import weddingDalmatians from "../shared/images/wedding.png";
import llamaDeath from "../shared/images/funerals.png";
import dwightBirthday from "../shared/images/birthdays.jpg";
import hangoverBach from "../shared/images/bach.png";
import spongebobGrad from "../shared/images/graduation.jpg";
import partyPlanning from "../shared/images/createown.jpg";

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
            fontSize={{ base: "6xl", md: "5xl", lg: "7xl" }}
            color="white"
            textAlign="center"
            flex="1"
            width="100%" // Adjusted to take full width in all breakpoints
            maxWidth={{ base: "90%", lg: "70%" }} // Adjusted for better spacing
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
              <ChakraLink as={Link} to="/budget">Budget</ChakraLink>
            </Tab>
            <Tab> 
              <ChakraLink as={Link} to="/tasks">Tasks</ChakraLink>
            </Tab>
            <Tab>
              <ChakraLink as={Link} to="/venues">Venues</ChakraLink>
            </Tab>
          </TabList>
        </Tabs>

        <Routes>
          {/* Ensure the path matches exactly with the Link to="/budget" */}
          <Route path="/budget" element={<Budget />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/venues" element={<Venues />} />
        </Routes>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {/* Wedding Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  WEDDINGS
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={weddingDalmatians} alt="Wedding Dalmatians" w="100%" h="100%" objectFit="cover" borderRadius="md" mt="2"/>
              </Box>
            </Box>
          </GridItem>

          {/* Birthday Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  BIRTHDAYS
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={dwightBirthday} alt="It is your birthday." w="100%" h="100%" objectFit="cover" borderRadius="md" mt="2"/>
              </Box>
            </Box>
          </GridItem>
          {/* Graduation Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  GRADUATIONS
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={spongebobGrad} alt="Graduation ceremony" w="100%" h="100%" objectFit="cover" borderRadius="md" mt="2"/>
              </Box>
            </Box>
          </GridItem>

          {/* Bach Party Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  BACH PARTIES
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={hangoverBach} alt="Bach party" w="100%" h="100%" objectFit="cover" borderRadius="md" mt="2"/>
              </Box>
            </Box>
          </GridItem>
          
          {/* Funeral Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  FUNERALS
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={llamaDeath} alt="Funeral ceremony" w="100%" h="100%" objectFit="cover" borderRadius="md" mt="2"/>
              </Box>
            </Box>
          </GridItem>

          {/* Create Your Own Event Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center">
                <Heading as="h3" size="md" color="white" textAlign="center">
                  CREATE YOUR OWN EVENT
                </Heading>
              </Box>
              <Box position="relative" height="100%" maxH="300px">
                <Image src={partyPlanning} alt="Party planning" w="100%" h="100%" objectFit="cover" borderRadius="md" mt="2"/>
              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Footer mt={6} p={4} bg="blue.800" textAlign="center" />
      </Box>
    </ChakraProvider>
  );
}
