import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";

import ProtectedRoute from "../shared/ProtectedRoute/ProtectedRoute";
import SidebarHeader from "../layout/SidebarHeader/SidebarHeader";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { checkUserAuthenticated } from "../../redux/auth/auth.actions";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PostPage from "../pages/PostPage/PostPage";

const Container = styled.div`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  height: 100vh;
  position: relative;

  @media (max-width: ${({ theme }) => theme.small}) {
    flex-direction: column;
  }
`;

const MainRouter = ({ checkUserAuthenticated, user }) => {
  useEffect(() => {
    checkUserAuthenticated();
  }, [checkUserAuthenticated]);

  const location = useLocation();
  console.log(user);

  return (
    <React.Fragment>
      {(location.pathname === "/" && !user._id) ||
      location.pathname === "/login" ? (
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
        </React.Fragment>
      ) : (
        <Container>
          <SidebarHeader user={user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <ProtectedRoute
              user={user}
              exact
              path="/user/settings"
              component={Settings}
            />
            <Route exact path="/user/:userId" component={Profile} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/post/:postId" component={PostPage} />
          </Switch>
        </Container>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserAuthenticated: () => dispatch(checkUserAuthenticated())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);
