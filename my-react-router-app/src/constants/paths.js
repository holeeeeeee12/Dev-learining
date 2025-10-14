// 경로 문자열을 관리 상수 객체
const PATHS = {
  ROOT: {
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postId",
    getPostDetail: (postId) => `/post/${postId}`,
    PROFILE: "/profile",
  },
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGHUP: "/auth/signup",
  },
};

export default PATHS;
