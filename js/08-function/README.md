# 함수(function)

- 제어문
- 특정 기능을 수행하기 위해 미리 정의한(모아놓은) 코드 블록

## 우리가 사용해온 함수

- `console.log()`
- `String()` : 문자열 형 변환 정의된 함수(도구)
- `number()` : 숫자형 형 변환 정의된 함수(도구)
- `Boolean()`: 불리언 형 변환 정의된 홤수(도구)

## 함수의 장점

- 코드를 재사용하기에 좋다
- 유지보수에 좋다

## 정의(Define)와 호출(Call)

- 호출 : 함수를 실행
- 정의 : 함수의 이름과 기능(코드)를 정의

### 함수의 정의

- 3개의 방법(함수 선언식, 함수 표현식, 화살표 함수)

### 함수 선언식

- `function` 키워드를 사용해서 함수를 선언
- 호이스팅이 가능
- 매개변수와 반환값은 선택적
  - **반환값** : 함수가 생성하는 데이터
  - **매개변수**(parameter) : 개발자가 함수에 전달한 데이터를 저장한 변수

```jsx
let 변수명;

function 함수명(매개변수) {
  // 함수가 호출되면 실행되는 코드 블럭
  return;
}
```

### 함수 표현식

- 표현식: 데이터를 생성하는 코드 -> 변수에 할당 가능
- 함수 정의 코드 자체가 데이터를 생성 -> 변수에 할당 가능

- `function`키워드 사용
- 함수에 이름이 없다(익명 함수)
- 변수에 할당 해서 변수를 호추 ㄹ
- 호이스팅 x

```jsx
const 변수명 = function (매개변수) {
  return 반환값;
};
```

### 화살표 함수

- `function` 키워드 x
- `=>` 키워드 사용
- 함수 표현식과 유사

```jsx
const 변수명 = (매개변수) => {
  //코드 블럭
};

// ---
// 매개변수와 반환값으로 구분한 함수 정의
// 매개변수 x, 반환값 x => 활용도가 극히 낮음
// "Hello word" 출력 함수
function sayHello() {
  console.log("Hello World");
}

function sayHelloArrow() => {
  console.log("Hello World");
}
// 매개변수 x, 반환값 x => 활용도가 극히 낮음
// "Hello word" 출력 함수
function createOne(){
  return 1;
}
const createOneArrow = () => {
  return 1;
  };

// 매개변수 o, 반환값 o => 활용도가 낮음
function determine(number

// 매개변수 o, 반환값 x => 활용도가 높음

// 매개변수 o, 반환값 o => 활용도가 극히 높음
```
