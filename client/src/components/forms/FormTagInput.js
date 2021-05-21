import React from "react";
import { TagInput, FormField } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormTagInput = ({ name, error, ...rest }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  const isInvalid = React.useMemo(
    () => (touched[name] && errors[name] ? true : false),
    [touched, errors, name]
  );

  const validationMessage = React.useMemo(() => errors[name], [errors, name]);

  return (
    <FormField label={rest.label}>
      <TagInput
        {...rest}
        values={values[name]}
        isInvalid={isInvalid}
        {...(isInvalid ? { validationMessage } : {})}
        onBlur={() => setFieldTouched(name)}
        onChange={(tags) => setFieldValue(name, tags)}
      />
    </FormField>
  );
};

export default FormTagInput;
