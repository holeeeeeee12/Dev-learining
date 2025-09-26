import React from "react";

export default function App() {
  // DOM API (주석): textContent 철자 주의!
  // const element = document.createElement("h1");
  // element.textContent = "App";

  return (
    <>
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        {/* 규칙2. 모든 태그는 반드시 닫아야 한다 */}
        {/* input 태그는 self-closing */}
        <input />
        {/* 규칙3. 속성명은 카멜케이스로 작성 (onClick, onSubmit 등) */}
        {/* class -> className */}
      </div>

      <p className="font-bold text-5xl text-red-700">p 태그</p>
      <p style={{ fontSize: "3rem", color: "blue" }}>p 태그 2</p>
    </>
  );
}
