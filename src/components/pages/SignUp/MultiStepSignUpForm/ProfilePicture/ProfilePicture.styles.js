import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h4`
  font-size: 19px;
  margin-bottom: 15px;
`;

export const Subheading = styled.span`
  margin-bottom: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGrey};
`;

export const DropzoneBox = styled.div`
  width: 255px;
  height: 255px;
  border: 3px dashed ${({ theme }) => theme.lineBlue};
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGrey};
  z-index: 1;
`;

export const Icon = styled.i`
  position: absolute;
  font-size: 150px;
  color: ${({ theme }) => theme.whiteGrey};
`;
