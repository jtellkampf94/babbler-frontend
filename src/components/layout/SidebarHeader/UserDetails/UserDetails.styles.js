import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 15px;
  margin-right: 10px;
  width: 147px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.lineBlue};

  @media (max-width: ${({ theme }) => theme.large}) {
    border: none;
    width: 40px;
    margin-top: 15px;
    margin-right: 0px;
  }
`;

export const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;

  @media (max-width: ${({ theme }) => theme.large}) {
    width: 40px;
    height: 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.large}) {
    display: none;
  }
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const Username = styled.span`
  font-weight: 300;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 13px;
`;
