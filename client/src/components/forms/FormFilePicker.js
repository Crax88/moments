import React from "react";
import { InlineAlert, Pane, Text } from "evergreen-ui";
import { useFormikContext } from "formik";

const FormFilePicker = ({ name, error, accept, label, ...rest }) => {
  const inputRef = React.useRef();
  const [file, setFile] = React.useState({ file: null, previewUrl: null });
  const { setFieldTouched, setFieldValue, errors, touched } =
    useFormikContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile({
        file: file,
        previewUrl: /image/.test(file.type) ? URL.createObjectURL(file) : "",
      });
      setFieldValue(name, file);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      setFieldTouched(name);
      inputRef.current.click();
    }
  };
  const isInvalid = React.useMemo(
    () => (touched[name] && errors[name] ? true : false),
    [touched, errors, name]
  );
  const validationMessage = React.useMemo(() => errors[name], [errors, name]);

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
        height="100px"
        marginBottom="10px"
        borderColor={isInvalid ? "#D14343" : ""}
        borderRadius="4px"
        onClick={handleClick}
      >
        {!file.file ? (
          <Text>{label ? label : "Choose file"}</Text>
        ) : file.previewUrl ? (
          <img
            src={file.previewUrl}
            alt={file.filename}
            style={{
              display: "block",
              maxWidth: "230px",
              maxHeight: "95px",
              width: "auto",
              height: "auto",
              overflow: "hidden",
            }}
          />
        ) : (
          <Text color="#3366FF">{file.file.name}</Text>
        )}
      </Pane>
      {isInvalid && (
        <InlineAlert intent="danger" size={300}>
          {validationMessage}
        </InlineAlert>
      )}
      <input
        type="file"
        hidden
        ref={inputRef}
        onChange={handleFileChange}
        accept={accept}
      />
    </Pane>
  );
};

export default FormFilePicker;
