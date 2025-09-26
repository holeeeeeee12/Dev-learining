// 23-modern/computed
let key = "name";

const user = {
  key: "홍길동", //의도-nmae: "홍길동"
};
console.log(user); //실제 데이터-{key: '홍길동'}

// 탬플릿 리터럴을 사용 x 
// const user2 = {}

const user3 = {
  [key]:"홍길동"
}