require('dotenv').config(); 
const express = require('express');
const { ApolloServer } = require('@apollo/server'); // Updated import
const { expressMiddleware } = require('@apollo/server/express4'); // Updated import
const path = require('path');
const { authMiddleware } = require('./utils/auth');


const { typeDefs, resolvers } = require('./schemas');
const connectDB = require('./config/connection'); // Import connectDB function

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
 
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  connectDB.once("open", ()=> {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  }); // Connect to MongoDB before starting Apollo Server
  
};

startApolloServer();