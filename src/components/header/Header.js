import React from 'react'

import { Container, ClearAllDoneButton } from './header.style'


function Header({ handleClear }) {
  return (
    <Container>
      <h3>Tasks</h3>
      <ClearAllDoneButton
        className="btn-reset btn-clear"
        onClick={handleClear}
      >
        清除全部已完成
      </ClearAllDoneButton>
    </Container>
  );
}

export default Header;