import React from "react";
import { Pane, Avatar, Heading, Button, Link, Strong } from "evergreen-ui";

import logoText from "../assets/images/logoText.png";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Pane
      backgroundColor="#F9FAFC"
      borderRadius={15}
      marginX="30px"
      marginY="0"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="50px"
      paddingY="10px"
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
          style={{ transform: "translateY(-10px)" }}
        />
      </Pane>
      <Pane display="flex" alignItems="center">
        <Avatar src={logoText} size={45} />
        <Heading size={700} style={{ marginRight: "10px", marginLeft: "10px" }}>
          Bober
        </Heading>
        <Button size="small" intent="danger">
          Logout
        </Button>
      </Pane>
      <Link>
        <Strong color="#2952CC">Signin</Strong>
      </Link>
    </Pane>
  );
};

export default Navbar;