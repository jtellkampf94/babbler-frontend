import React from "react";

import { MainStyles, Container, Section } from "./Main.styles";
import Header from "./Header/Header";
import SidebarSection from "./SidebarSection/SidebarSection";

const Main = ({ children, title, avatarUrl, alt, profileUser, totalPosts }) => {
  return (
    <MainStyles>
      <Container>
        <Section>
          <Header
            alt={alt}
            profileUser={profileUser}
            totalPosts={totalPosts}
            avatarUrl={avatarUrl ? avatarUrl : null}
          >
            {title}
          </Header>
          {children}
        </Section>
        <SidebarSection />
      </Container>
    </MainStyles>
  );
};

export default Main;
