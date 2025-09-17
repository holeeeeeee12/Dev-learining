// 형 변환
// 명시적 형 변환: 개발자가 한것
// 암시적 형 변환: JS 엔진(번역기)이 자동으로 한 것

// 문자열로의 변환
// String() 함수
// 함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

// String(데이터) / String(변수)
console.log(String(123)); //숫자형 -> 문자열
console.log(String(123) === "123"); // ture

// true, undefined, null 문자열로 형변환 코드 작성
String(true);
String(undefined);
String(null);

// 숫자형 명시적 형 변환
// number() 함수: 숫자형으로 변환하는 도구
// number(데이터) / number(변수)
// 문자열 "123"을 숫자형으로 변환해서 출력(console.log())하는 코드 작성
// ""

console.log(Number("123") === 123);

// 만약, 숫자 형태가 아닌 문자열을 형변환하면?
// 0~9 숫자인데 알파벳? 한글?
console.log(Number("1a2b")); // 그럼 NaN(Not a number)로 나옴

// 불리언 명시적 형 변환
// 불리언 데이터: 맞다(ture) / 틀리다(false)
// Boolean()함수: 불리언으로 형변환하는 도구

// 불리언 형 변환 규칙
// 각 자료형마다 최소 1개는 거짓(false)로 변환
// false가 아닌 데이터는 모두 맞다(true)로 변환
// 숫자형 -> 불리언 형 변환
console.log(Boolean(-1));
console.log(Boolean(-1.1));
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(9999999999));

// 문자열 형 변환
console.log(Boolean(""));
console.log(Boolean("            "));

// 암시적 불리언 형 변환
// 불리언 데이터가 아닌 데이터에 대한 노리연산(&&, ||, !)
console.log(!0);
console.log(!"");
console.log(!1);
console.log(1 || 0);
console.log(0 || 10);

// false && true
