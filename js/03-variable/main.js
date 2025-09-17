// 변수에 데이터를 할당(assing 0, save X)
// 변수명 = 할당할 데이터
// 변수 message에 "Hello World"를 할당
message = "Hello World";
// = : 할당 연산자
// 1 = 1(수학적 표현)
console.log(message);
console.log(message);
console.log(message);
console.log(message);

// 자주봤던 실수
// 데이터 = 변수명
// "Hello World" = message

// 변수 message2 선언
// 선언과 할당은 분리

let message2;

// 선언의 방식 2개(원래는 3개)
// let
// 데이터의 재할당 가능
let message3 = "Hello variable";
// 변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";
// let은 안붙이나요? -> let을 붙이면 선언
// let 키워드는 재선언은 불가능

// let 변수 message4를 선언
let message4;
// 재선언은 불가능
// let message4;

// const
// 데이터의 재할당이 불가능(중요)
// const 변수 message5 선언하고, "Hello const" 할당
const message5 = "hello Const";
// message5 = "Hello World";

// let vs. const
// let: 변하는 데이터를 저장하는 변수 선언 방식
// const: 변하면 안되는 데이터를 저장하는 변수 선언 방식

// 대소문자 구분하기 떄문에 두 변수는 다른 변수
let message6;
let MESSAGE6;

// 카멜 케이스 적용전
let hellomessage;

// 카멜 케이스 적용후
let helloMessage;

// 의미 없는 변수명
let a = 1;
// 의미 있는 변수명
let number1 = 1;

// 탬플릿 리터럴
// 문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호 ${}를 사용

let name = "이재호";
let greet = `안녕하세요 ${name} 입니다.`;
console.log(greet);

// //  var
// var message7 = "비밀번호"
// var message7 = "Hello World"

// // 호이스팅 현상
// // 변수를 선언하기 전에 사용이 가능 
// var hoisiting - ""