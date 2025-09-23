// 각 원소에 +1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

// 각 원소 중 2로 나눴을 때 나머지가 2인 원소만 출력
numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  if (element % 2 === 0) {
    console.log(element);
  }
});

// ---
console.log("---");

// 각 원소에 +1을 한 결과를 모아서 새로운 배열

const newArray = [];
numbers4.forEach((element) => {
  // 새로운 배열에 +1을 저장
  newArray.push(element + 1);
});

console.log(newArray);
// ---
console.log("---");

// map() 활용
const newArray2 = numbers4.map((element) => {
  //반환ㄷ값: 원소+1
  element + 1;
  return 1;
});
console.log(newArray2); //[2,3,4,5,6]

// ---
// map()을 활용해서 원소 *2를 한 데이터를 모은 새로운 배열 생성
const newArray3 = numbers5.map((element) => {
  return element * 2;
});

// for ()
// for (elemt of array)

// reduce()
// 배열의 누적을 반환

const numbers10 = [1, 2, 3, 4, 5];
numbers10.reduce((accvalue, currElement) => {
  // accValue : 이전 반복동안 반환된 값을 누적한 데이터
  // currElement: 현재 원소
  // 반환값들이 누적된다.

  return accValue + 1;
  // accValue + 1
  //  ---------------
  // 0        + 1, => accValue = 1
  // 0        + 1, => 
});

console.log(result); // 5

