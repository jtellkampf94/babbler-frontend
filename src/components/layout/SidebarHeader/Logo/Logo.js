import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../../../icons/BabblerIcon/BabblerIcon";
import theme from "../../../../config/theme";
import { Container, LogoContainer } from "./Logo.styles";

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <LogoContainer>
          <LogoIcon color={theme.babbler} width="40px" height="40px" />
        </LogoContainer>
      </Link>
    </Container>
  );
};

export default Logo;
