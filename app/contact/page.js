import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="text-[24px] font-bold  text-center justify-center">
        Contact Artist
      </h1>
      <div className="flex  items-center justify-center min-h-screen">
        <div className="text-center mx-4">
          <Image
            src="/one.png"
           className="rounded-md hover:scale-110 transition-transform duration-300 cursor-pointer"
            width={200}
            height={200}
            alt="Artist 1"
          />
          <h2 className='my-2'>Leticia Kanthiti</h2>
          <p>
  
            <Link
              href="https://github.com/Leti681"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </div>
        <div className="text-center mt-4 mx-4">
          <Image
            src="/two.png"
           className="rounded-md hover:scale-110 transition-transform duration-300 cursor-pointer"
            width={200}
            height={200}
            alt="Artist 2"
          />
          <h2 className='my-2'> Mayimunah Nagayi</h2>
          <p>
            <Link
              href="https://github.com/Mayimunah"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </div>
        <div className="text-center mt-4 mx-4">
          <Image
            src="/three.png"
           className="rounded-md hover:scale-110 transition-transform duration-300 cursor-pointer"
            width={200}
            height={200}
            alt="Artist 3"
          />
          <h2 className='my-2'> Bello Bambo</h2>
          <p>

            <Link
              href="https://github.com/bellobambo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
