import React from "react";
import { useParams, useLocation } from "react-router-dom";
const DemoParams = () => {
  let id = useParams();
  let location = useLocation();
  console.log(location);
  const arrayConvert = location.pathname.split("/");
  console.log(arrayConvert);
  const string = arrayConvert.join("/");
  console.log(string);
  return <div>DemoParams</div>;
};

export default DemoParams;
