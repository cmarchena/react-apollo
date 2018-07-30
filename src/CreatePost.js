import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_POST = gql`
  mutation createPost($title: String!, $text: String!) {
    createPost(data: { isPublished: true, title: $title, text: $text }) {
      id
    }
  }
`;

export default class CreatePost extends Component {
  state = {
    title: '',
    text: ''
  };
  handleTitle = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  };
  handleText = e => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_POST}>
        {(createPost, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createPost({
                  variables: { title: this.state.title, text: this.state.text }
                });
                console.log('Post Created!cd buil');
              }}
            >
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={this.handleTitle}
              />
              <label htmlFor="text">Content</label>
              <textarea
                name="text"
                id="text"
                cols="30"
                rows="10"
                onChange={this.handleText}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
