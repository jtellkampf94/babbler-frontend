import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};
  border-left: 1px solid ${({ theme }) => theme.lineBlue};
  border-right: 1px solid ${({ theme }) => theme.lineBlue};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  &.alt {
    border-left: none;
    border-right: none;
  }
`;

export const SecondaryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.darkGrey};
  font-size: 13px;
  font-weight: 300;
`;
