import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div className="">
      {/* 데이터(Props, 자식 컴포넌트의 속성)를 전달하는 방법 */}
      <Child name="홍길동" age={20} />
      <Child name="김철수" age={25} />
      <Child name="영희" age={30} />
    </div>
  );
}
