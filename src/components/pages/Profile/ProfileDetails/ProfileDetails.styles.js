import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const ProfileHeaderImage = styled.div`
  background-color: ${({ theme }) => theme.lineBlue};
  background-image: url(${props => props.headerImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};

  @media (max-width: ${({ theme }) => theme.profileBP}) {
    padding-bottom: 33.44%;
    height: 0;
  }
`;

export const AvatarContainer = styled.div`
  font-size: 140px;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  background-image: url(${props => props.profilePicture});
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.profileBP}) {
    width: 93.3333%;
    height: auto;

    &:after {
      content: "";
      padding-bottom: 100%;
      display: block;
    }
  }
`;

export const ProfileBorder = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  top: 62.5%;
  left: 15px;

  @media (max-width: ${({ theme }) => theme.profileBP}) {
    width: 25%;
    height: auto;

    &:after {
      content: "";
      padding-bottom: 100%;
      display: block;
    }
  }
`;
