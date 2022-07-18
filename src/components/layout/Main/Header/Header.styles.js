import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 53px;
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};
  background-color: ${({ theme }) => theme.white};
  z-index: 1;
`;

export const BackButtonContainer = styled.div`
  margin-left: 15px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Title = styled.h1`
  font-size: 19px;
  font-weight: 700;
  margin-left: 15px;
`;

export const AvatarContainer = styled.div`
  margin-left: 15px;
  width: 32px;
  height: 32px;
`;
