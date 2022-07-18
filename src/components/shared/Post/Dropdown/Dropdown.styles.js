import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  margin-left: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.teritaryBlue};
  }
`;

export const Icon = styled.i`
  font-size: 16px;
  color: ${({ theme }) => theme.darkGrey};
`;

export const OptionContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 210px;
  background-color: white;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
  border-radius: 5px;
  overflow: hidden;
`;

export const OptionItem = styled.div`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.darkGrey};

  &:hover {
    color: ${({ theme }) => theme.alertRed};
    & .dropdown-icon {
      color: ${({ theme }) => theme.alertRed};
    }
  }
`;

export const DeleteIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
`;

export const Text = styled.span`
  font-size: 16px;
`;
