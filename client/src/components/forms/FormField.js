import React from "react";
import { TextInputField } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormField = ({ name, ...rest }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  const isInvalid = React.useMemo(
    () => (touched[name] && errors[name] ? true : false),
    [touched, errors, name]
  );
  const validationMessage = React.useMemo(() => errors[name], [errors, name]);

  return (
    <TextInputField
      {...rest}
      isInvalid={isInvalid}
      {...(isInvalid ? { validationMessage } : {})}
      onBlur={() => setFieldTouched(name)}
      onChange={handleChange(name)}
    />
  );
};

export default FormField;
