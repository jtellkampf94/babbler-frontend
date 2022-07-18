import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  overflow-y: auto;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.large}) {
    justify-content: flex-end;
    overflow-y: none;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    background-color: ${({ theme }) => theme.white};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    order: 2;
    height: 3.5rem;
    border-top: 1px solid ${({ theme }) => theme.lineBlue};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 275px;
  align-items: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.large}) {
    width: 88px;
    overflow-y: auto;
    align-items: center;
    flex-wrap: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    flex-direction: row;
    width: 100%;
    overflow-y: hidden;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 155px;
  flex-direction: column;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.large}) {
    margin-right: 0px;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    flex-direction: row;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-left: 20px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.large}) {
    justify-content: center;
    margin-left: 0px;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    position: fixed;
    bottom: calc(3.5rem + 15px);
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 8px,
      rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;
    margin: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.babbler};
    z-index: 3;
  }
`;

export const Icon = styled.i`
  font-size: 20px;
  margin-right: 5px;
  color: ${({ theme }) => theme.white};

  @media (max-width: ${({ theme }) => theme.large}) {
    margin-right: 0px;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.large}) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.small}) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;
