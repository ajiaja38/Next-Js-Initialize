import React from "react";
import { useRouter } from "next/router";

const DetailProduct = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product: {query.guid}</p>
    </div>
  );
};

export default DetailProduct;
