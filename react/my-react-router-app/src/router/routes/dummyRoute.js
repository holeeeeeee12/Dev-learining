import DummyLayout from "../../layout/DummyLayout.jsx";
import Carts from "../../pages/DummyPages/Carts.jsx";
import Posts from "../../pages/DummyPages/Posts.jsx";
import Products from "../../pages/DummyPages/Products.jsx";
import DummyHome from "../../pages/DummyPages/DummyHome.jsx";
// 경로 상수 불러오기
import PATHS from "../../constants/paths.js";

const dummyRoutes = [
  {
    // path: "/dummy",
    path: PATHS.DUMMY.INDEX,

    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: DummyHome,
      },
      {
        // path: "carts",
        path: PATHS.DUMMY.CARTS,

        Component: Carts,
      },
      // 로그인 경로(path)와 Component 설정
      {
        // path: "posts",
        path: PATHS.DUMMY.POSTS,

        Component: Posts,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        // path: "products",
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
    ],
  },
];

export default dummyRoutes;
