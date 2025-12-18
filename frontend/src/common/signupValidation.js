import * as yup from "yup";

const signupValidation = yup.object({
    userName: yup
        .string()
        .required("Username is required")
        .max(30, "Username is too long"),

    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
            "Password must contain at least one letter and one number"
        ),
        
    confirmPassword: yup
        .string()
        .required("Confirm password is required")
        .oneOf([yup.ref("password")], "Passwords must match"), // this is how you refer the another fiels in yup
});

export default signupValidation ; 
