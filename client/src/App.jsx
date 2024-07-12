// src/App.jsx

import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/navigation'; // Adjust path as necessary

import Error from './pages/Error';
import Home from './pages/Home';
import Task from './pages/Task';
import Budget from './pages/Budget';
import Venues from './pages/Venues';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <BrowserRouter>
        <NavBar /> {/* Include NavBar outside of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Venues" element={<Venues />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Task" element={<Task />} />
          <Route path="*" element={<Error />} /> {/* Fallback for 404 */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
