import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearAllDoneButton = styled.button`
  border: 1px solid var(--major);
  border-radius: 50px;
  padding: 0.4rem;
  color: var(--major);
  transition: all 0.3s;

  &:hover {
    background-color: var(--major);
    color: #fff;
    font-weight: 500;
  }
`;

export { Container, ClearAllDoneButton };
