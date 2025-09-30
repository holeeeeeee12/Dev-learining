import React from "react";

export default function LoginStatus({ isLogin, userName }) {
  return (
    <div>
        로그인 상태 :{isLogin === true ? "로그인 상태" : "비 로그인 상태"}
        <p>
          {isLogin === true ? `${userName}님 환영합니다.` : "로그인 해주세요"}
        </p>
    </div>
  );
}
