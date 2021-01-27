import styled from 'styled-components';

const Container = styled.footer`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;

const Context = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
`

const LogoutBtn = styled.button`
  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, Context, LogoutBtn }