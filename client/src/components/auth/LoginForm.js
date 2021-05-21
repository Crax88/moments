import React from "react";
import PropTypes from "prop-types";
import { InlineAlert } from "evergreen-ui";
import { Form, FormField, FormCheckbox, SubmitButton } from "../forms";
import { loginSchema } from "./validationRules";

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

const LoginForm = ({ onSubmit, errors }) => {
  return (
    <Form
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {errors.error && (
        <InlineAlert size={300} intent="danger" marginBottom="10px">
          {errors.error}
        </InlineAlert>
      )}
      <FormField name="email" label="Email" error={errors.email} />
      <FormField
        name="password"
        label="Password"
        type="password"
        error={errors.password}
      />
      <FormCheckbox name="remember" label="Remember me" />
      <SubmitButton title={"Signin"} appearance="primary" />
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

LoginForm.defaultProps = {
  errors: {},
};

export default LoginForm;
