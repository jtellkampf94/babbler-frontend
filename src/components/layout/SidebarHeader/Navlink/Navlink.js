import React from "react";
import { Link } from "react-router-dom";

import { Container, IconContainer, TextContainer } from "./Navlink.styles";

const NavLink = ({ path, text, children, onClick }) => (
  <Link to={path} onClick={onClick}>
    <Container>
      <IconContainer>{children}</IconContainer>
      <TextContainer>
        <span className="text">{text}</span>
      </TextContainer>
    </Container>
  </Link>
);

export default NavLink;
