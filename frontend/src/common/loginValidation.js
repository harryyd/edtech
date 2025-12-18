import * as yup from "yup";

 const loginValidation = yup.object({
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    password: yup
        .string()
        .required("Password is required")
 // this is how you refer the another fiels in yup
});
export default loginValidation ;
