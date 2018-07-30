import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
const StyledModal = styled.div`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 24rem;
    border-radius: 0.5rem;
  }

  .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
  }

  .close-button:hover {
    background-color: darkgray;
  }

  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  }
`;

class Modal extends Component {
  state = {
    isActive: false
  };
  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
    console.log('Modal Opened!', this.state.isActive);
  };
  render() {
    return (
      <StyledModal>
        <div className={`modal ${this.state.isActive ? 'show-modal' : null}`}>
          <div className="modal-content">
            <span
              onClick={this.toggleModal}
              className={`close-button ${
                this.state.isActive ? null : 'show-modal'
              }`}
            >
              &times;
            </span>
            {this.props.children}
          </div>
        </div>

        <Button trigger onClick={this.toggleModal}>
          {this.props.text}
        </Button>
      </StyledModal>
    );
  }
}
export default Modal;
