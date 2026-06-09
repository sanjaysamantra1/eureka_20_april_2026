import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const [searchParams] = useSearchParams();
  const [product,setProduct] = useState(null);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
    // console.log(searchParams.get("title"), searchParams.get("price"));
    setProduct({...currentParams});
  }, [searchParams]);

  return <>
    <h3>Product Details</h3>
    <div>
      {product.id}
      {product.title}
      {product.price}
    </div>
  </>
}
