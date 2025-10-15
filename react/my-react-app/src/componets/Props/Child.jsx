import React from "react";

export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>{props["name"]}</h1>
      <h1>{props["age"]}</h1>
    </div>
  );
}
