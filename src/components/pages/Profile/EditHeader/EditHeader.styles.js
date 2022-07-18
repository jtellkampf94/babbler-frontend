import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
`;

export const Header = styled.h1`
  font-size: 23px;
  margin-bottom: 15px;
`;

export const Text = styled.span`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const HeaderPlaceholder = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.lineBlue};
  position: relative;
  border-radius: 15px;
  width: 100%;
  padding-top: 33.44%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.lineBlue};

  &:hover {
    background-color: rgba(204, 214, 221, 0.7);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.headerImage});
`;

export const PlaceholderImage = styled.div`
  border-radius: 50%;
  width: 20%;
  height: 59.81%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imagePlaceholder});
`;

export const FileInput = styled.input`
  display: none;
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  align-self: flex-end;
`;
