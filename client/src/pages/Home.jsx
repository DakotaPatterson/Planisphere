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
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// Load the Kimberley BL font
import "../shared/fonts/kimberley bl.otf";

// Import page components
import Budget from "../pages/Budget";
import Task from "../pages/Task";
import Venues from "../pages/Venues";

// Import images
import dwightBirthday from "../shared/images/birthdays.jpg";
import hangoverBach from "../shared/images/bach.png";
import puppyGrad from "../shared/images/graduation.jpg";
import partyPlanning from "../shared/images/createown.jpg";
import weddingDalmatians from "../shared/images/wedding.png";
import llamaDeath from "../shared/images/funerals.png";

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

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = (heading) => {
    navigate(`/venues/${heading}`);
  };

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
              <ChakraLink as={Link} to="/home">Home</ChakraLink>
            </Tab>
            <Tab>
              <ChakraLink as={Link} to="/budget">Budget</ChakraLink>
            </Tab>
            <Tab>
              <ChakraLink as={Link} to="/task">Tasks</ChakraLink>
            </Tab>
            <Tab>
              <ChakraLink as={Link} to="/venues">Venues</ChakraLink>
            </Tab>
          </TabList>
        </Tabs>

          <Routes>
            <Route path="/home" element={Home} />
            <Route path="/budget" component={Budget} />
            <Route path="/task" component={Task} />
            <Route path="/venues" component={Venues} />
          </Routes>


        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {/* Weddings Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Weddings")}>
                <Heading as="h3" size="md" color="white" textAlign="center">
                  WEDDINGS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={weddingDalmatians} alt="Wedding Dalmatians" w="100%" h="100%" objectFit="cover" borderRadius="md" />
              </Box>
            </Box>
          </GridItem>

          {/* Funerals Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Funerals")}>
                <Heading as="h3" size="md" color="white" textAlign="center">
                  FUNERALS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={llamaDeath} alt="Llama Funeral" w="100%" h="100%" objectFit="cover" borderRadius="md" />
              </Box>
            </Box>
          </GridItem>

          {/* Birthdays Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Bach Parties")}>
                <Heading as="h3" size="md" color="white" textAlign="center">
                  BIRTHDAYS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={dwightBirthday} alt="Bach Party" w="100%" h="100%" objectFit="cover" borderRadius="md" />
              </Box>
            </Box>
          </GridItem>

          {/* Bach Parties Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Bach Parties")}>
                <Heading as="h3" size="md" color="white" textAlign="center">
                  BACH PARTIES
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={hangoverBach} alt="Bach Party" w="100%" h="100%" objectFit="cover" borderRadius="md" />
              </Box>
            </Box>
          </GridItem>

          {/* Graduations Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Bach Parties")}>
                <Heading as="h3" size="md" color="white" textAlign="center">
                  GRADUATIONS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={puppyGrad} alt="Bach Party" w="100%" h="100%" objectFit="cover" borderRadius="md" />
              </Box>
            </Box>
          </GridItem>

          {/* Create Your Own Event Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Bach Parties")}>
                <Heading as="h3" size="md" color="white" textAlign="center">
                  CREATE YOUR OWN EVENT
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={partyPlanning} alt="Bach Party" w="100%" h="100%" objectFit="cover" borderRadius="md" />
              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Footer mt={6} p={4} bg="blue.800" textAlign="center" />
      </Box>
    </ChakraProvider>
  );
}
