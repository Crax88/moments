import React from "react";
import { TextareaField } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormTextArea = ({ name, ...rest }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  const isInvalid = React.useMemo(
    () => (touched[name] && errors[name] ? true : false),
    [touched, errors, name]
  );
  const validationMessage = React.useMemo(() => errors[name], [errors, name]);

  return (
    <TextareaField
      {...rest}
      isInvalid={isInvalid}
      {...(isInvalid ? { validationMessage } : {})}
      onBlur={() => setFieldTouched(name)}
      onChange={handleChange(name)}
    />
  );
};

export default FormTextArea;
