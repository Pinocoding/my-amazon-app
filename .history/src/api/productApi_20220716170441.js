import axios from "axios";
import { useEffect } from "react";
import React from "react";

function productApi() {
  useEffect(() => {
    function getData() {
      const res = axios.get("");
    }
  }, []);
  return <div></div>;
}

export default productApi;

// make the http GET request to Rainforest API
