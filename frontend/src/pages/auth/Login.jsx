import React ,{useState} from 'react'
import loginValidation from '../../common/loginValidation';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [error ,setError] = useState({})

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevdata) => ({ ...prevdata, [name]: value }));
    console.log("name" , name) ;
    setError((prevError) => (
      console.log("nadwfwme" , name) ,
      { ...prevError, [name]: "" }));

      console.log("dwf", error )
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    
    try{
      await loginValidation.validate(loginData, { abortEarly: false });
      console.log("Validation Successful");
      setError({}) ;
    }
    catch(error){
      console.log("daat"  , error , error.inner) ; 

      error.inner.forEach((err) => {
        setError((prevError) => ({ ...prevError, [err.path]: err.message }));
      });
    }    
  }
      

    // console.log(loginData
  return (
    <>
      <input type="email" placeholder='Email' name="email" onChange={changeHandler} value={loginData.email} />
      {
        error.email && <p style={{color : "red"}}>{error.email}</p>
      }
      <input type="password" placeholder='Password' name="password" onChange={changeHandler} value={loginData.password} />
      {
        error.password && <p style={{color : "red"}}>{error.password}</p>
      }
      <button onClick={submitHandler}>Login</button>
    </>
  )
}

export default Login