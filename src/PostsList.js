import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import CrudControls from './components/CrudControls';
import Modal from './components/Modal';

const GET_POSTS = gql`
  {
    posts {
      id
      isPublished
      title
      text
    }
  }
`;

const PostsList = () => {
  return (
    <Query query={GET_POSTS}>
      {({ loading, error, data: { posts } }) => {
        if (loading) return <p> Loading... </p>;
        if (error) return <p> Error: ( </p>;

        return posts.map(post => (
          <div key={post.id}>
            <div>
              <h3> {post.title} </h3> <p> {post.text} </p>
            </div>

            <CrudControls />
          </div>
        ));
      }}
    </Query>
  );
};
export default PostsList;
