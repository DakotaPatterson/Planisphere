import React from 'react';
import {
  Box,
  Heading,
  Grid,
  GridItem,
  extendTheme,
  Image,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

  const handleButtonClick = (keywords) => {
    navigate(`/venues?search=${encodeURIComponent(keywords)}`);
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Box p={4} bg="blue.800">
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/Budget" component={Budget} />
          <Route path="/Task" component={Task} />
          <Route path="/Venues" component={Venues} />
        </Routes>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {/* Weddings Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Wedding venues")}>
                <Heading as="h3" size="lg" color="white" textAlign="center">
                  WEDDINGS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={weddingDalmatians} alt="Wedding Dalmatians" w="100%" h="100%" objectFit="cover" borderRadius="md" maxW="100%" cursor='pointer' onClick={() => handleButtonClick("Wedding venues")} />
              </Box>
            </Box>
          </GridItem>

          {/* Funerals Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Funeral venues")}>
                <Heading as="h3" size="lg" color="white" textAlign="center">
                  FUNERALS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={llamaDeath} alt="The poison for Kuzco. Kuzco's Poision." w="100%" h="100%" objectFit="cover" borderRadius="md" maxW="100%" cursor='pointer' onClick={() => handleButtonClick("Funeral venues")} />
              </Box>
            </Box>
          </GridItem>

          {/* Birthdays Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Birthday venues")}>
                <Heading as="h3" size="lg" color="white" textAlign="center">
                  BIRTHDAYS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={dwightBirthday} alt="It is your birthday." w="100%" h="100%" objectFit="cover" borderRadius="md" maxW="100%" cursor='pointer' onClick={() => handleButtonClick("Birthday venues")} />
              </Box>
            </Box>
          </GridItem>

          {/* Bach Parties Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("bachelor party venues")}>
                <Heading as="h3" size="lg" color="white" textAlign="center">
                  BACH PARTIES
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={hangoverBach} alt="Hangover Bach Party" w="100%" h="100%" objectFit="cover" borderRadius="md" maxW="100%" cursor='pointer' onClick={() => handleButtonClick("bachelor party venues")} />
              </Box>
            </Box>
          </GridItem>

          {/* Graduations Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("Graduation Party Venues")}>
                <Heading as="h3" size="lg" color="white" textAlign="center">
                  GRADUATIONS
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={puppyGrad} alt="...now what." w="100%" h="100%" objectFit="cover" borderRadius="md" maxW="100%" cursor='pointer' onClick={() => handleButtonClick("Graduation Party Venues")} />
              </Box>
            </Box>
          </GridItem>

          {/* Create Your Own Event Box */}
          <GridItem>
            <Box bg="blue.600" p={4} borderRadius="md" textAlign="center" height="100%">
              <Box bg="blue.400" p={4} mt={4} borderRadius="md" minHeight="100px" display="flex" alignItems="center" justifyContent="center" cursor='pointer' onClick={() => handleButtonClick("venues")}>
                <Heading as="h3" size="lg" color="white" textAlign="center">
                  CREATE YOUR OWN EVENT
                </Heading>
              </Box>
              <Box position="relative" height="300px">
                <Image src={partyPlanning} alt="the party planning committee" w="100%" h="100%" objectFit="cover" borderRadius="md" maxW="100%" cursor='pointer' onClick={() => handleButtonClick("venues")} />
              </Box>
            </Box>
          </GridItem>
        </Grid>

        <Footer mt={6} p={4} bg="blue.800" textAlign="center" />
      </Box>
    </ChakraProvider>
  );
}
