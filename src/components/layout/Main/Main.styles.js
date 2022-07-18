import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.small}) {
    order: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 990px;
  flex-shrink: 1;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.sidebar}) {
    width: 920px;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    width: 640px;
  }

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.lineBlue};
  border-left: 1px solid ${({ theme }) => theme.lineBlue};
`;
