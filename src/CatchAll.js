import React from "react";
import { Link } from "react-router-dom";
function CatchAll() {
  return (
    <>
      <h1> 404 not found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default CatchAll;
