import Link from 'next/link';
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md animate-fadeInUp">
        <h1 className="text-3xl font-semibold mb-4 animate-bounce">
          Welcome to the CanvasReach Art Store
        </h1>
        <p className="text-gray-600 mb-6 animate-fadeIn">
          Discover beautiful artworks created by talented artists.
        </p>
        <Link
          href="/catalogue"
          className="bg-black hover:bg-stone-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out animate-pulse"
        >
          Explore the Art Gallery
        </Link>
      </div>
    </div>
  );
}
