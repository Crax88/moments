import React from "react";
import PropTypes from "prop-types";
import { InlineAlert } from "evergreen-ui";
import { Form, FormField, SubmitButton } from "../forms";
import { registerSchema } from "./validationRules";

const initialValues = {
  nickName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = ({ onSubmit, errors }) => {
  return (
    <Form
      validationSchema={registerSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {errors.error && (
        <InlineAlert size={300} intent="danger" marginBottom="10px">
          {errors.error}
        </InlineAlert>
      )}
      <FormField name="nickname" label="Nickname" error={errors.nickName} />
      <FormField name="email" label="Email" error={errors.email} />
      <FormField
        name="password"
        label="Password"
        type="password"
        error={errors.password}
      />
      <FormField
        name="confirmPassword"
        label="Confirm password"
        type="password"
        error={errors.confirmPassword}
      />
      <SubmitButton title={"Signup"} appearance="primary" />
    </Form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

RegisterForm.defaultProps = {
  errors: {},
};

export default RegisterForm;
