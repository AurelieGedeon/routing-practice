import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const onSubmit = (event) => {
    console.log(name);
    event.preventDefault(); //telling your browser to prevent the default action from happening
  };
  return (
    <>
      <h1> Fill out your info or else</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
