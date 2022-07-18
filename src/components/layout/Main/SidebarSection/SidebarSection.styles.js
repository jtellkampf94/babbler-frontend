import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 350px;
  margin-right: 10px;
  height: 503px;
  position: sticky;
  top: 0;

  @media (max-width: ${({ theme }) => theme.sidebar}) {
    width: 290px;
  }

  @media (max-width: ${({ theme }) => theme.medium}) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  height: auto;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.lineBlue};
`;

export const Title = styled.h2`
  font-size: 19px;
  font-weight: 700;
  margin-left: 15px;
`;
