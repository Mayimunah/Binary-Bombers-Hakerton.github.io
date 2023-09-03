"use client";

import React, { useEffect, useState } from "react";
import useCart from "../(store)/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductPage(props) {
  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;
  const cartItems = useCart((state) => state.cart);
  const router = useRouter();

  console.log(productInfo);

    // if (!product?.name) {
    //   window.location.href = "/";
    // }


  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    console.log("PRICE ID: ", price_id);
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });

    // Set a flag to indicate that the item has been added to the cart
    setIsAddedToCart(true);
  };



  async function checkout() {
    try {
      const lineItems = cartItems.map((cartItem) => ({
        price: cartItem.price_id,
        quantity: 1,
      }));
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });
      if (res.ok) {
        const data = await res.json();
        router.push(data.session.url);
      } else {
        // Handle error here, e.g., show an error message to the user.
        console.error("Failed to initiate checkout.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
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

          <button
            onClick={checkout}
            className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2"
          >
            Pay
          </button>
          <button
            onClick={handleAddToCart}
            className={`bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2 ${
              isAddedToCart ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
