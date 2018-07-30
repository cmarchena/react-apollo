import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Button from './components/Button';
import Modal from './components/Modal';

const UPDATE_POST = gql`
  mutation updatePost($title: String, $text: String, $id: ID!) {
    updatePost(data: { title: $title, text: $text }, where: { id: $id }) {
      id
    }
  }
`;

export default class UpdatePost extends Component {
  state = {
    text: this.props.text,
    title: this.props.title
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
      <Mutation mutation={UPDATE_POST}>
        {(updatePost, { loading, error }) => (
          <Modal text="Edit">
            <div>
              {console.log(this.props)}
              <form
                onSubmit={e => {
                  e.preventDefault();
                  updatePost({
                    variables: {
                      title: this.state.title,
                      text: this.state.text
                    }
                  });
                  console.log('Post Updated!');
                }}
              >
                <label htmlFor="title"> Title </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={this.handleTitle}
                />
                <label htmlFor="text"> Content </label>
                <textarea
                  name="text"
                  id="text"
                  cols="30"
                  rows="10"
                  onChange={this.handleText}
                />
                <Button type="submit">Submit</Button>
              </form>

              {loading && <p> Processing... </p>}
              {error && <p> Error, please try again </p>}
            </div>
          </Modal>
        )}
      </Mutation>
    );
  }
}
