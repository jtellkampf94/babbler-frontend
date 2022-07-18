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

export const ProfilePlaceholderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderImage = styled.div`
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-size: cover;
  border-radius: 50%;
  background-position: center;
  background-image: url(${props => props.imagePlaceholder});
`;

export const FileInput = styled.input`
  display: none;
`;
