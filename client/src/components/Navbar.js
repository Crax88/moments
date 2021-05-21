import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Pane, Avatar, Heading, Button, Link, Strong } from "evergreen-ui";

import logoText from "../assets/images/logoText.png";
import logo from "../assets/images/logo.png";

const Navbar = ({ auth }) => {
  const { isAuth, loginData } = auth;
  return (
    <Pane
      backgroundColor="#F9FAFC"
      borderRadius={15}
      marginX="30px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="50px"
      paddingY="10px"
      elevation={1}
    >
      <Pane isplay="flex" alignItems="center">
        <img
          src={logoText}
          alt="Moments"
          height="45px"
          style={{ marginRight: "20px" }}
        />
        <img
          alt="logo"
          src={logo}
          height="30px"
          style={{ transform: "translateY(-15px)" }}
        />
      </Pane>
      {isAuth ? (
        <Pane display="flex" alignItems="center">
          <Avatar src={loginData.image} size={45} />
          <Heading
            size={700}
            style={{ marginRight: "10px", marginLeft: "10px" }}
          >
            {loginData.nickname}
          </Heading>
          <Button size="small" intent="danger">
            Logout
          </Button>
        </Pane>
      ) : isAuth !== null ? (
        <Link is={RouterLink} to="/login">
          <Strong color="#2952CC">Signin</Strong>
        </Link>
      ) : null}
    </Pane>
  );
};

export default Navbar;
