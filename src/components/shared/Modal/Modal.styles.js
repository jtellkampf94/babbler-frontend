import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export const ModalContent = styled.div`
  border: 1px solid ${({ theme }) => theme.lineBlue};
  background-color: ${({ theme }) => theme.white};
  position: fixed;
  top: 10%;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  max-height: calc(100vh - 20%);
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.modalBreakPoint}) {
    width: 70%;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 90%;
  }
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lineBlue};
  height: 53px;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButton = styled.button`
  padding: 0px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
`;
