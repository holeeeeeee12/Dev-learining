// 도메인주소
const BASE_URL = "https://dummyjson.com";

// axios 불러오기
// import axios from "axios";
const testRuote = async () => {
  // async / await
  // async function connectTest() {
  //   // axios.get(URL): 데이터 요청에 대한 응답 데이터를 생성
  //   const response = await axios.get("/text");
  //   console.log(response["data"]);
  //   // console.table(Object.keys(response));
  const data = await axios.get(`${base_URL}/test`);
};
testRoute();

async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  const products = data["products"];
  console.log(products);
}

getAllProducts();
