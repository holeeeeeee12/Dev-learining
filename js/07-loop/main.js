// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// 변수 number를 5번 출력, 변수 number가 3미만 일 때 까지
// 1씩 증가하면서
let number = 0; // 초기화

console.log(number); // 반복 실행할 코드
number = number + 1; // 증감식

console.log(number); // 반복 실행할 코드
number = number + 1; // 증감식

console.log(number); // 반복 실행할 코드
number = number + 1; // 증감식

// for(초기화문; 조건식; 증감문)
for (let number2 = 0; number < 3; number2 = number2 + 1) {
  console.log(number2); //반복 실행할 코드
}

// 내가 어떤 코드를 5번 반복
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}번 실행`);
}

let N = 10;
for (let i = 0; i < N; i++) {
  console.log(`${i + 1}번 실행`);
}

// 숫자를 0부터 5까지 출력
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 9 && i === 7) {
    continue;
  }
  console.log(`i의 값: ${i}`);
}
