import React, { useState } from 'react'
import signupValidation from '../../common/signupValidation';
import {dispatch} from '../../redux/store' ;
// import * as z from "zod";
// import 

const Signup = () => {

  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setError] = useState({});



  const changeHandler = async (e) => {
    e.preventDefault();

    

    const { name, value } = e.target;
    setSignupData((prevdata) => ({ ...prevdata, [name]: value }));
    setError((prevError) => (
      console.log("nadwfwme", name),
      { ...prevError, [name]: "" }));

      // if(signupData.password === signupData.confirmPassword){
      //   console.log("Passwords match");
      //   setError((prevError) => (
      //     console.log("nadwfwme", name),
      //     { ...prevError, ["password"]: "" }));
      //   }

        // console.log("running", signupData.password, signupData.confirmPassword); // state back 
  }



  const submitHandler = async (e) => {
    e.preventDefault();


    try {
      await signupValidation.validate(signupData, { abortEarly: false });
      console.log("Validation Successful");
      setError({});

      
      //dispatch here 
       
      //otop requet here 
    } catch (error) {

      if (error.inner) {
        console.log(typeof error.inner, error.inner);
        error.inner.forEach((err) => {
          setError((prevError) => ({ ...prevError, [err.path]: err.message }));
        });
      }
    }

    // console.log(signupData);
  };



  return (
    <>
      <div>signup</div>

      <form onSubmit={submitHandler}>

        <input type="text" placeholder='userName' name="userName" onChange={changeHandler} value={signupData.userName} />
        {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
        <input type="email" placeholder='Email' name="email" onChange={changeHandler} value={signupData.email} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <input type="text" placeholder='Password' name="password" onChange={changeHandler} value={signupData.password} />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <input type="text" placeholder='confirmPassword' name="confirmPassword" onChange={changeHandler} value={signupData.confirmPassword} />
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

        <button type='submit'>Sign Up</button>
      </form>

    </>


    // local stratergy
    //sign up with google andd github 
  )
}

export default Signup 