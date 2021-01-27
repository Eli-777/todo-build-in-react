import React from 'react'

import { Container, ClearAllDoneButton } from './header.style'


function Header({ handleClick }) {
  return (
    <Container>
      <h3>Tasks</h3>
      <ClearAllDoneButton
        className="btn-reset btn-clear"
        onClick={() => handleClick('clear')}
      >
        清除全部已完成
      </ClearAllDoneButton>
    </Container>
  );
}

export default Header;