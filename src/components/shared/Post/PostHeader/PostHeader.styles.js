import styled from "styled-components";

export const ContentHeader = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.small}) {
    justify-content: flex start;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 35px;
    height: 35px;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 3px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 45px;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Username = styled.span`
  color: ${({ theme }) => theme.darkGrey};
  margin-right: 3px;
  font-size: 13px;
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.small}) {
    max-width: 100px;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DatePosted = styled.span`
  color: ${({ theme }) => theme.darkGrey};
  margin-right: 3px;
  font-weight: 300;
  font-size: 13px;
  @media (max-width: ${({ theme }) => theme.small}) {
    max-width: 85px;
  }
`;
