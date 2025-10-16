import AuthLayout from "../../layout/AuthLayout.jsx";

import AuthHome from "../../pages/AuthPages/AuthHome.jsx";
import Signup from "../../pages/AuthPages/Signup.jsx";
import Login from "../../pages/AUthPages/Login.jsx";

// 경로 상수 불러오기
import PATHS from "../../constants/paths.js";

const authRoutes = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.SIGHUP,
        Component: Signup,
      },
    ],
  },
];

export default authRoutes;
