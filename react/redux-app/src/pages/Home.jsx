import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="signup">회원가입페이지</Link>
      <Link to="login">로그인페이지</Link>
    </div>
  );
}
