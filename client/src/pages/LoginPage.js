import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Pane, Heading, Paragraph, Link } from "evergreen-ui";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Pane
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Pane
        border="default"
        borderRadius="4px"
        padding="30px"
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        flexDirection="column"
        width="500px"
        backgroundColor="#fff"
      >
        <Heading textAlign="center" size={700}>
          Signin
        </Heading>
        <LoginForm />
        <Paragraph size={500} marginTop="10px">
          Don't have an account?{" "}
          <Link is={RouterLink} size={500} cursor="pointer" to="/register">
            Signup
          </Link>
        </Paragraph>
      </Pane>
    </Pane>
  );
};

export default LoginPage;
