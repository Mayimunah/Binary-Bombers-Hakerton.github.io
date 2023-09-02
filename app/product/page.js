"use client";

import React from "react";
import useCart from "../(store)/store";
import Image from "next/image";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = props;
  const product = useCart((state) => state.product);
  const { cost, productInfo, name, description } = product;
  // const { name, description } = productInfo
  console.log(productInfo);
  console.log(searchParams);
  if (!product?.name) {
    window.location.href = "/";
  }
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 shadow">
          <Image
            src={productInfo.images[0]}
            alt={name}
            className="object-cover bg-slate-900 h-full"
            width={250}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex text-xl md:flex-col md:items-start items-center justify-between gap-2">
            <h3>{name}</h3>
            <h3 className="md:text-base">${cost / 100}</h3>
          </div>
          <p className="text-sm">{description}</p>
          <button className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
