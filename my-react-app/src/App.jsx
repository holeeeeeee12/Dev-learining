import React from "react";
import Parent from "./componets/Props/Parent";
import ProfileContainer from "./componets/PropsExample/ProfileContainer";

import OnClick from "./componets/EventHandling/OnClick";
import OnChange from "./componets/EventHandling/OnChange";
import OnSubmit from "./componets/EventHandling/Onsubmit";

// 컴포넌트 함수 외부는 import 함수 외 X

export default function App() {
  return (
    <div>
      {/* <Parent></Parent> */}
      <ProfileContainer></ProfileContainer>
      {/* {Interpolation 컴포넌트 불러오기} */}
      {/* <Header></Header>
      <Interpolation> </Interpolation>
      <MyButton></MyButton>
      <MyList></MyList>
      <Header></Header>
      <Footer></Footer>q */}
      {/* <OnClick></OnClick> */}
      {/* <OnChange></OnChange> */}
      {/* <OnSubmit></OnSubmit> */}
    </div>
  );
}
