import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios("https://dummyjson.com/products");
      const data = response["data"];
      console.log(data);
      setProducts(data["products"]);
    }
    getProducts();
  }, []);
  //   return (
  //     <div>
  //       {products.map((product) => {
  //         return <Product prouduct={product}></Product>;
  //       })}
  //     </div>
  //   );
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => {
        return <Product key={product.id} product={product}></Product>;
      })}
    </div>
  );
}

