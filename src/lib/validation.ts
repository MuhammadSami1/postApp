import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Invaild email").required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters "),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const formField = yup.object({
  text: yup.string().required("Input is required"),
  textarea: yup
    .string()
    .required("Text is required")
    .min(10, "Body must be at least 10 characters long"),
});
