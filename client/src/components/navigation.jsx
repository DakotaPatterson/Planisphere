// // src/components/navigation.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Flex,
//   Heading,
//   Spacer,
//   IconButton,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   useColorMode
// } from '@chakra-ui/react';


// const NavBar = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Box boxShadow="md" py="4" bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}>
//       <Flex px="4" maxW="6xl" mx="auto" align="center">
//         <Heading as="h1" size="md">
//           My Website
//         </Heading>
//         <Spacer />
//         <Flex display={{ base: 'none', md: 'flex' }} ml="6">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/portfolio">Portfolio</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </Flex>
//         <Menu>
//           <MenuButton
//             as={IconButton}
//             aria-label="Options"
//             icon={<HamburgerIcon />}
//             variant="outline"
//             display={{ base: 'block', md: 'none' }}
//             onClick={toggleMenu}
//           />
//           <MenuList isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
//             <MenuItem>
//               <NavLink to="/">Home</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/about">About</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/portfolio">Portfolio</NavLink>
//             </MenuItem>
//             <MenuItem>
//               <NavLink to="/contact">Contact</NavLink>
//             </MenuItem>
//           </MenuList>
//         </Menu>
//         <IconButton
//           aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
//           icon={colorMode === 'light' ? <CloseIcon /> : <HamburgerIcon />}
//           onClick={toggleColorMode}
//           ml={2}
//           display={{ base: 'block', md: 'none' }}
//         />
//       </Flex>
//     </Box>
//   );
// };

// const NavLink = ({ to, children }) => (
//   <Link
//     to={to}
//     px={2}
//     py={1}
//     rounded="md"
//     color="gray.800"
//     _hover={{ textDecoration: 'none', bg: 'gray.200' }}
//     _activeLink={{ fontWeight: 'bold' }}
//   >
//     {children}
//   </Link>
// );

// export default NavBar;
