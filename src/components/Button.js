import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: white;
  color: black;
  transition: all 1s;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  ${props =>
    props.submit &&
    css`
      background: violet;
      color: white;
      &:hover {
        background: white;
        color: violet;
        border: 1px solid violet;
      }
    `};
  ${props =>
    props.danger &&
    css`
      background: firebrick;
      color: white;
      border: 1px solid firebrick;
    `};
  ${props =>
    props.trigger &&
    css`
      background: palegoldenrod;
      padding: 1em 2em;
      border-radius: 5 px;
      box-shadow: 5 px 5 px 5 px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    `};
`;

export default Button;
