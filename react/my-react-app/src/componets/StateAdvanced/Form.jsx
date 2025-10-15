import React from "react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  function handleChange(event) {
    // event 객체의 target 속성 : 이벤트가 발생한 요소 정보
    const target = event["target"];
    console.log(target);

    // // target 에서 name 속성과 value속성 꺼내서 출력
    const { name, value } = target;
    console.log(name, value);

    const newForm = { ...form, [name]: value };

    setForm(newForm);

    // if (name === "username") {
    //   setUsername(value);
    // } else if (name === "age") {
    //   setAge(value);
    // } else if (name === "email") {
    //   setEmail(value);
  }


  return (
    <div>
      <form>
        {/* <input type="checkbox" checked {false} /> */}
        


        {/* 3개의 input 요소의 값을 상태로 관리 */}
        {/* input 요소의 value 속성은 사용자가 입력한 값 */}
        {/* 밑 value: 속성 , {변수}: 상태 변수 */}
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
