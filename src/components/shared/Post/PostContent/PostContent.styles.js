import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentText = styled.div`
  margin-bottom: 15px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  border-radius: 15px;
  max-width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.lineBlue};
`;
