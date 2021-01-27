import React from 'react'

import { Container, Context, LogoutBtn } from './footer.style'

function Footer({ numOfRemaining, handleFBLogout }) {

  return (
    <Container>
      <Context>剩餘項目: {numOfRemaining}</Context>
      <LogoutBtn
        className="btn-reset"
        onClick={handleFBLogout}
      >
        登出
      </LogoutBtn>
    </Container>
  );
}

export default Footer;