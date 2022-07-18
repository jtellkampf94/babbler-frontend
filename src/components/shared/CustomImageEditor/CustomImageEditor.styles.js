import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ZoomerContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 16px;
  color: ${({ theme }) => theme.babbler};
  &.fa-minus {
    margin-right: 5px;
  }

  &.fa-plus {
    margin-left: 5px;
  }
`;

export const Zoomer = styled.input`
  width: 100%;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 15px;
`;
