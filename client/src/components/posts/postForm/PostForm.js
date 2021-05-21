import React from "react";
import PropTypes from "prop-types";
import { InlineAlert, Pane } from "evergreen-ui";
import { Form, FormField, FormFilePicker, SubmitButton } from "../../forms";
import { postSchema, acceptTypes } from "./validationRules";

const initialValues = {
  title: "",
  body: "",
  file: null,
};

const PostForm = ({ onSubmit, errors }) => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width="100%"
      border="default"
      padding="5px"
      borderRadius="4px"
      backgroundColor="#fff"
    >
      <Form
        validationSchema={postSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {errors.error && (
          <InlineAlert size={300} intent="danger" marginBottom="10px">
            {errors.error}
          </InlineAlert>
        )}
        <FormField name="title" label="Title" error={errors.title} />
        <FormField name="body" label="Text" error={errors.body} />
        <FormFilePicker name="file" label="Choose image" accept={acceptTypes} />
        <SubmitButton title={"Create"} appearance="primary" />
      </Form>
    </Pane>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

PostForm.defaultProps = {
  errors: {},
};

export default PostForm;
