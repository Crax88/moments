import React from "react";
import { Pane, Heading, Paragraph, Link } from "evergreen-ui";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
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
        <RegisterForm />
        <Paragraph size={500} marginTop="10px">
          Have an account?{" "}
          <Link size={500} cursor="pointer" href="#">
            Signin
          </Link>
        </Paragraph>
      </Pane>
    </Pane>
  );
};

export default RegisterPage;
