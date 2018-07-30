import React from 'react';
import DeletePost from '../DeletePost';
import UpdatePost from '../UpdatePost';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
const EditButton = props => {
  return <UpdatePost id={props.id} {...props} />;
};
const RemoveButton = props => {
  return <DeletePost id={props.id} />;
};
const CrudControls = props => {
  return (
    <Wrapper>
      <EditButton id={props.id} />
      <RemoveButton id={props.id} />
    </Wrapper>
  );
};
export default CrudControls;
