import React from 'react';
import styled from 'styled-components';
import LoadingGif from '../../assets/img/loading.gif';

const Wrapper = styled.div`
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading({ height }) {
  return (
    <Wrapper height={height}>
      <img src={LoadingGif} height="64px" width="64px" alt="Loading gif" />
    </Wrapper>
  );
}

export default Loading;
