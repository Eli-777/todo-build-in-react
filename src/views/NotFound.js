import React from 'react';

import styled from 'styled-components';

const NotFoundWord = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3.2rem;
`

function NotFound(props) {
  return (
    <NotFoundWord>
      This page is not found!!
    </NotFoundWord>
  );
}

export default NotFound;