import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .label("Email"),
  password: Yup.string().required("Password is required").label("Password"),
  remember: Yup.boolean(),
});

export const registerSchema = Yup.object().shape({
  nickname: Yup.string()
    .required("Nickname is required")
    .min(5, "At least 5 characters")
    .label("Nickname"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(26, "Password can not be longer than 26 characters")
    .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Must contain at least lowercase letter")
    .matches(/[0-9]/, "Must contain at least 1 digit")
    .matches(/[@$.!%*#?&]/, "Must contain at least 1 special character")
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm password"),
  remember: Yup.boolean(),
});
