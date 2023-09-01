"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronBarUp } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Navbar(props: Props) {
  const [showProfile, setShowprofile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center justify-between  py-4 relative">
        <div className="flex items-center justify-start space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <a href="/">Home</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
              <li>
                <a href="/" className="py-3 inline-block">
                  Art
                </a>
              </li>
              <li>
                <a href="/filters" className="py-3 inline-block">
                  Art
                </a>
              </li>
              <li>
                <a href="/myproducts" className="py-3 inline-block">
Art
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => setShowprofile(!showProfile)}
            className="relative cursor-pointer"
          >
            <Image
              height={200}
              width={200}
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              className="w-[35px] h-[35px] rounded-full objext-cover"
              alt=""
            />
            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? "" : "hidden"
              }`}
            >
              <Link href="/sign">SignIn</Link>
            </div>
          </div>

          <Link href="/cart">
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span onClick={() => setShowNav(!showNav)} className="">
            <BsChevronBarUp className={`transition ease-in duration-150 ${showNav ? "rotate-180" : "0"}`} />
          </span>
        </div>
      </div>
<div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`}>
<ul className='flex flex-col text-[15px] opacity-75 px-2'>
  <li>

  </li>

</ul>

      </div>
    </div>
  );
}
