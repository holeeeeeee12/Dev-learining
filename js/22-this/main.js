// 일반 함수에서의

function func() {
  console.log("함수");
  console.log(this);
}
func();
// 중괄호로 표현되는 자료형
// 객체의 특징: key -value 속성으로 구성
// 함수도 value가 될 수가 있음. 이러한 함수를 메서드라고 한다.
// 즉, 객체에 포함된 함수는 메서드라고 한다.

const obj = {
  name: "홍길동",
  age: 20,
  func: function () {
    console.log(this);
  },
};
// obj 객체의 func 메서드를 실행(호출)
obj.func(); //

//화살표 함수로 표현한 매서드는 함수 선언식(표현식, function 키워드를 사용한 함수) 작동 방식이 다르다.

const user2 = {
  name: "홍길동",
  age: 20,
  //
  greet: () => {
    console.log(this);
  },
};
user2.greet();

const user3 = {
  name: "홍길동",
  age: 20,
  //
  greet: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
};
user3.greet();
