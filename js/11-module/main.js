// // 모듈을 불러오기
// // inport / from

// // from: 어디서 불러올 것이냐
// // import: 무엇을 불러올 것이냐
// import { add, substract, multiply, devide, PI } from "./math.js";
// console.log(add(1, 2));

// // 여러개 내보내기 / 불러오기는 일부만 불러오기가 가능
// console.log(add(1, 2));
// console.log(PI); //3.14

// // 하나만 불러오기
// // 내가 불러온 함수의 이름을 결정
// // 대표성을 뛴다는 특징
// // import plus from "./계산기.js";

// // console.log(plus(1, 2));

import colobject from "./calculator.js";
console.log(colobject);
console.log(colobject.add(1, 2));
console.log(colobject.substract(1, 2));
