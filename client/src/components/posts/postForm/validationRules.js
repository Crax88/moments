import * as Yup from "yup";

export const acceptTypes = "image/png,image/jpg,image/jpeg";

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(5, "At least 5 characters"),
  body: Yup.string()
    .required("Text is required")
    .min(5, "At least 5 characters"),
  file: Yup.mixed()
    .test("fileSize", "File Size is too large", (value) =>
      !value ? true : value.size / 1024 / 1024 < 10
    )
    .test(
      "fileType",
      `Only ${acceptTypes
        .split(",")
        .map((el) => el.split("/")[1])
        .join(" ")}`,
      (value) => (!value ? true : acceptTypes.includes(value.type))
    ),
});
