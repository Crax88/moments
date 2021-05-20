import React from "react";
import { TextInputField } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormField = ({ name, error, ...rest }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  const isInvalid = React.useMemo(
    () => (touched[name] && (error || errors[name]) ? true : false),
    [touched, error, errors, name]
  );
  const validationMessage = React.useMemo(
    () => (error ? error : touched[name] && errors[name] ? errors[name] : ""),
    [error, errors, name, touched]
  );
  return (
    <TextInputField
      {...rest}
      isInvalid={isInvalid}
      {...(validationMessage ? { validationMessage } : {})}
      onBlur={() => setFieldTouched(name)}
      onChange={handleChange(name)}
    />
  );
};

export default FormField;
