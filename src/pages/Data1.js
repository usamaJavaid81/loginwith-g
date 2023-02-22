import React, { useEffect } from "react";
import { handleGetRequest } from "../services/GetTemplate";

const Data1 = () => {
  useEffect(() => {
    const res = handleGetRequest(
      "/todos/1"
    );
    console.log("res", res);
  }, []);
  return (
    <>
      <h1>my data 1</h1>
    </>
  );
};

export default Data1;
