import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.darkGrey};
  cursor: pointer;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.babbler};
    color: ${({ theme }) => theme.babbler};
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondaryBlue};
  }
`;
