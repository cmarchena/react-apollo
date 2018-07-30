import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Button from './components/Button';

const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(where: { id: $id }) {
      id
    }
  }
`;

export default class DeletePost extends Component {
  handleClick = e => {
    console.log(this.props);
  };
  render() {
    return (
      <Mutation mutation={DELETE_POST}>
        {(deletePost, { loading, error }) => (
          <Button
            danger
            onClick={e => {
              e.preventDefault();
              deletePost({
                variables: { id: this.props.id }
              });
            }}
          >
            X
          </Button>
        )}
      </Mutation>
    );
  }
}
