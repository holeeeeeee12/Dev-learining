import React from "react";
import Rule from "./componets/JSX/Rule";
import Interpolation from "./componets/JSX/interpolation";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import MyButton from "./componets/MyButton";
import MyList from "./componets/MyList";

export default function App() {
  return (
    <div>
      {/* {Interpolation 컴포넌트 불러오기} */}
      <Header></Header>
      <Interpolation> </Interpolation>
      <MyButton></MyButton>
      <MyList></MyList>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
