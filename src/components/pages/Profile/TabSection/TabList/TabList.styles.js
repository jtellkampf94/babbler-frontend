import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};
`;
