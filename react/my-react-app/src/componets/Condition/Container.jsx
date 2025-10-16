import React from "react";
import AdminLink from "./";
// Container 컴포넌트에
// LoginStatus 컴포넌트를 불러와서
// <div> 태그 사이에 2개의 LoginStatus를 배치

export default function Container() {
  return (
    <div>
      {/* 첫 번째 컴포넌트에는 isLogin 속성에 true 전달 */}

      <LoginStatus isLogin={true} userName="김철수"></LoginStatus>

      {/* 두 번째 컴포넌트에는 isLogin 속성에 false 전달 */}
      <LoginStatus isLogin={false} userName="홍길동"></LoginStatus>

      <AdminLink isAdmin={true}></AdminLink>
      <AdminLink isAdmin={false}></AdminLink>
    </div>
  );
}
