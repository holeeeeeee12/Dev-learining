import { useEffect, useState } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    console.log("의존성 배열이 없는 useEffect");
  });
  useEffect(() => {
    console.log("의존성 배열이 있는데 빈 배열인 useEffect");
  }, []);
  useEffect(() => {
    console.log("의존성 배열에 Number 상태가 저장");
  },[number]);
  useEffect(() => {
    console.log("의존성 배열에 NUmber2 상태가 저장");
  }, [number2]);
 
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("1")
    }, 1000);
    return () => { 
      clearInterval(intervalId);
    };
  });

    <div>
      <button
        onClcik={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <button
        onClcik={() => {
          setNumber2(number + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}
