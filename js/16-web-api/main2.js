import axios from "axios";

const BASE_URL = `https://dummyjson.com`;

async function getProductById(n) {
  const res = await axios.get(`${BASE_URL}/products/${n}`);
  const data = res["data"];
  console.log(data);
}

getProductById(1);
getProductById(2);
getProductById(10);
