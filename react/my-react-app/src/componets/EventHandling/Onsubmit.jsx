import React from "react";

export default function OnSubmit() {
  function handleSubmit(event) {}

  return (
    <div>
      <form
        OnSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" name="email" className="border-2" />
        <input type="password" naem="password" className="border-2" />
        <input type="submit" value="제출" className="border-2" />
      </form>
    </div>
  );
}
