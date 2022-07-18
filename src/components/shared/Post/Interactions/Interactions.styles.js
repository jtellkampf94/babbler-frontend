import styled from "styled-components";

export const InteractionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.darkGrey};
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    color: ${({ theme }) => theme.alertRed};

    &:hover {
      color: ${({ theme }) => theme.lightRed};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

export const IconText = styled.span`
  font-size: 13px;
  margin-left: 5px;
  font-weight: 700;
`;

export const Icon = styled.i`
  font-size: 19px;
`;

export const Text = styled.span`
  margin-top: 15px;
  font-weight: 300;
  cursor: pointer;
  font-size: 13px;
  color: ${({ theme }) => theme.darkGrey};
`;
