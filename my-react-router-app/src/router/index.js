// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import DummyLayout from "../layout/DummyLayout.jsx";

import Carts from "../pages/DummyPages/Carts.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import Products from "../pages/DummyPages/Products.jsx";
import DummyHome from "../pages/DummyPages/DummyHome.jsx";

import rootRoutes from "./routes/rootRoutes.js";
import authRoutes from "./routes/authRoute.js";

// 라우터 설정 생성
const router = createBrowserRouter([
  ...rootRoutes,
  ...authRoutes,
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: DummyHome,
      },
      {
        path: "carts",
        Component: Carts,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: "posts",
        Component: Posts,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: "products",
        Component: Products,
      },
    ],
  },
]);

export default router;
