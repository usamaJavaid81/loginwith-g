import React, { useEffect } from "react";
import { handleGetRequest } from "../services/GetTemplate";
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useHistory } from 'react-router-dom';

const Data1 = () => {
  const history = useHistory();
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
      <button onClick={() => history.push("data1")}>click here</button>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      
    </>
  );
};

export default Data1;
