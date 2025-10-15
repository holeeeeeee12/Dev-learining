import React from "react";
import { useState } from "react";

export default function StateBasic() {
  const [somethingState, setSomthingState] = useState();
  const [something, setSomething] = useState();
  const [string, setString] = useState("문자열");

  const [array, setArray] = useState([1, 2, 3]);

  function handleClick() {
    const newArray = [...array, 4];
    setArray(newArray);
    console.log("상태 변경");

    // 변경할 데이터를 상태 변경 함수에 전달해야한다.
    setString("상태 변경");
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        상태변경
      </button>
      {array.map((element) => {
        return <li>{element}</li>;
      })}
    </div>
  );
}
