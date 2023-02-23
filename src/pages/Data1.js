import React, { useEffect } from "react";
import { handleGetRequest } from "../services/GetTemplate";
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const Data1 = () => {
  useEffect(() => {
    const res = handleGetRequest(
      "/todos/1"
    );
    console.log("res", res);
  }, []);

  const responseMessage = (response) => {
    console.log(response, 'response');
    localStorage.setItem("googleLoginToken", response.credential)
  };
  const errorMessage = (error) => {
    console.log(error, 'error');
  };

  return (
    <>
      <h1>my data 1</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      
    </>
  );
};

export default Data1;
