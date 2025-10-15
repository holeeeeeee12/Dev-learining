import React from "react";

export default function OnChange() {
  function handleChange(event) {
    console.log(event);
    console.log(event["target"]);
    console.log(event["target"]["value"]);
  }출력 

  function handleNumberChange(event) {
    // 사용자 입력 값이 10보다 작으면 
    // console.log()를 사용해서 "10보다 작은 수" 라고 
    const value = event["target"]["value"];
    if (value < 10) {
      console.log("10보다 작은 수")
    }



  }
  return (
    <div>
      {/* 실습2 */}
      {/* onChange 이벤트 속성에서 이벤트 객체를 전달하면서 handleNumberChange 호출 */}
    
        type="number"
        className="w-7x1 border-4 border-amber-400 p-2 m-2"
        onChange={(event) => {
          handleNumberChange(event);
        }}

      <input
        type="text"
        className="w-7x1 border-4 border-amber-400 p-2 m-2"
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
}
