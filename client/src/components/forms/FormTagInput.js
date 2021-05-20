import React from "react";
import { TagInput, FormField } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormTagInput = ({ name, error, ...rest }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  const isInvalid = React.useMemo(
    () => (touched[name] && (error || errors[name]) ? true : false),
    [touched, error, errors, name]
  );
  const validationMessage = React.useMemo(
    () => (error ? error : touched[name] && errors[name] ? errors[name] : ""),
    [error, errors, name, touched]
  );
  return (
    <FormField label={rest.label}>
      <TagInput
        {...rest}
        values={values[name]}
        isInvalid={isInvalid}
        {...(validationMessage ? { validationMessage } : {})}
        onBlur={() => setFieldTouched(name)}
        onChange={(tags) => setFieldValue(name, tags)}
      />
    </FormField>
  );
};

export default FormTagInput;
