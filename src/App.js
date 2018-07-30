import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import PostsList from './PostsList';
import CreatePost from './CreatePost';
import Modal from './components/Modal';

//This is a Prisma Cloud Server Endpoint
const client = new ApolloClient({
  uri: 'https://eu1.prisma.sh/carlos-marchena-d0bfaa/demo/dev'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h2>Prisma Cloud Example</h2>
        <CreatePost />
        <PostsList />
      </ApolloProvider>
    );
  }
}

export default App;
