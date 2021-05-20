import React from "react";
import { Button } from "evergreen-ui";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...rest }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button onClick={handleSubmit} type="submit" {...rest}>
      {title}
    </Button>
  );
};

export default SubmitButton;
