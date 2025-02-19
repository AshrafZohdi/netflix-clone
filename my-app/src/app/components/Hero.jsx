"use client";
import Image from "next/image";
import { Play, Info } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/FeaturedMovie.webp"
          alt="Featured Movie"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl px-6 md:px-12 lg:px-20">
        {/* Movie Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">The Dark Knight</h1>

        {/* Movie Description */}
        <p className="text-gray-300 mt-4 text-sm md:text-lg">
          When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
            <Play className="w-5 h-5" />
            Play
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
