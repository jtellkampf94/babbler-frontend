import styled from "styled-components";

export const ErrorStyles = styled.span`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.alertRed};
`;
