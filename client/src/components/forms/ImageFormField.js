import React from "react";
import { InlineAlert, Pane, Text } from "evergreen-ui";
import { useFormikContext } from "formik";

const ImageFormField = ({ name, error, ...rest }) => {
  const inputRef = React.useRef();
  const [file, setFile] = React.useState({ file: null, previewUrl: null });
  const { setFieldTouched, setFieldValue, errors, touched } =
    useFormikContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile({
        file: file,
        previewUrl: URL.createObjectURL(file),
      });
      setFieldValue(name, file);
    }
    setFieldTouched(name);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const isInvalid = React.useMemo(
    () => touched[name] && (error || errors[name]),
    [touched, error, errors, name]
  );
  const validationMessage = React.useMemo(
    () => (error ? error : errors[name] ? errors[name] : ""),
    [error, errors, name]
  );
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width="100%"
      marginBottom="24px"
    >
      <Pane
        border="default"
        width="100%"
        display="flex"
        alignItemx="center"
        justifyContent="center"
        minHeight="100px"
        marginBottom="10px"
        borderColor={touched[name] && isInvalid ? "#D14343" : ""}
        borderRadius="4px"
        padding="12px"
        onClick={handleClick}
        background={`url(${file.previewUrl}) center/contain no-repeat`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        {!file.previewUrl && <Text>Choose image</Text>}
      </Pane>
      {touched[name] && isInvalid && (
        <InlineAlert intent="danger" size={300}>
          {validationMessage}
        </InlineAlert>
      )}
      <input type="file" hidden ref={inputRef} onChange={handleFileChange} />
    </Pane>
  );
};

export default ImageFormField;
