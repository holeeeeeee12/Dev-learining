import RootLayout from "../../layout/RootLayout.jsx";
import Home from "../../pages/RootPages/Home.jsx";
import About from "../../pages/RootPages/About.jsx";
import Profile from "../../pages/RootPages/Profile.jsx";
import PostList from "../../pages/RootPages/PostList.jsx";
import PostDetail from "../../pages/RootPages/PostDetail.jsx";
import ProtectedLayout from "../../layout/ProtectedLayout.jsx";

// 경로 상수 불러오기
import PATHS from "./../../constants/paths.js";

const rootRoutes = [
  {
    path: PATHS["ROOT"]["INDEX"],
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path : "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT,
        Component: About,
      },
      {
        path: PATHS.ROOT.POSTS,
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POST_DETAIL,
        Component: PostDetail,
      },
      {
        // path 속성 X
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [
          {
            path: PATHS.ROOT.PROFILE,
            Component: Profile,
          },
        ],
      },
    ],
  },
];

export default rootRoutes;
