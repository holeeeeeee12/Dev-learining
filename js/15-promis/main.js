// Promise 두가지 상태
// 비동기 처리의 성공과 실패
// 예시) 네트워크 통신의 성공과 실패

// 성공 상태일 때 수행할 처리 메서드
// .then(콜백함수)

// fetch("https://example.com")
//   .then((response) => {
//     console.log(response);
//     return response.text();
//   })
//   .then ((data) => {
//     console.log(data);
//   });

async function func() {
  try {
    // 비동기처리를 수행하는 코드 블록
    // await 키워드
    // Promise 기반 비동기처리 수행
    const result = 

  } catch (error) {
    // 비동기처리가 성공했을 때
    // 비동기처리가 실패했을 때
    console.log(error);
  }
}


