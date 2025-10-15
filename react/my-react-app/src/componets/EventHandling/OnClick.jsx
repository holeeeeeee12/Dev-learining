import React from "react";

export default function OnClick() {
  function handleClick(OnClick) {
    alert(`클릭`);
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick("클릭");
        }}
      >
        클릭
      </button>
    </div>
  );
}
