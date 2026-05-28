"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1>all products lists here</h1>

      <div>
        {products.map((elem) => (
          <h1 key={elem.id} onClick={() => console.log("hello")}>
            {elem.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Page;