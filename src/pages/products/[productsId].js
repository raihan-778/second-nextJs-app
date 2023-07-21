import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h2>This is Dynamic Route of Products: {router.query.productsId} </h2>
    </div>
  );
};

export default ProductDetails;
