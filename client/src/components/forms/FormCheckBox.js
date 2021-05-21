import React from "react";
import { Checkbox } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormField = ({ name, ...rest }) => {
  const { setFieldValue, values } = useFormikContext();

  const handleToggle = (e) => setFieldValue(name, e.target.checked);

  return <Checkbox onChange={handleToggle} checked={values[name]} {...rest} />;
};

export default FormField;
