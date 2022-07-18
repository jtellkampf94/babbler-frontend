import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

export const Name = styled.span`
  font-size: 19px;
  font-weight: 700;
  margin-top: 60px;
`;

export const Username = styled.span`
  font-weight: 300;
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.darkGrey};
`;

export const Bio = styled.div`
  margin: 15px 0px 0px;
`;

export const Joined = styled.div`
  margin: 15px 0px;
`;

export const JoinedText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGrey};
`;

export const CalendarIcon = styled.i`
  font-size: 16px;
  color: ${({ theme }) => theme.darkGrey};
  margin-right: 5px;
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Followers = styled.span``;

export const Following = styled.span`
  margin-right: 25px;
`;

export const Numbers = styled.span`
  font-weight: 700;
`;

export const FollowText = styled.span`
  margin: 0 5px;
  font-weight: 300;
  font-size: 16px;

  color: ${({ theme }) => theme.darkGrey};
`;

export const ButtonContainer = styled.div``;


