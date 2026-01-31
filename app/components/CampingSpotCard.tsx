"use client";

import Image from "next/image";


type CampingSpot = {
  id: number;
  name: string;
  location: string;
  image1: string;
  rating: number;
};

export default function Page({ spot }: { spot: CampingSpot }) {
  return (
    <div
      key={spot.id}
      className="rounded-2xl bg-gray-50 w-full cursor-pointer shadow-lg shadow-black/10 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/20 duration-300"
      onClick={() => {
        console.log("Click on spot:", spot.name);
      }}
    >
      <Image
        className="rounded-2xl"
        src={spot.image1}
        alt={spot.name}
        width={350}
        height={350}
      />
      <div className="px-3 pb-3">
        <h2 className="text-md md:text-xl font-bold mt-2">{spot.name}</h2>
        <p className="text-sm md:text-md text-gray-700">{spot.location}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm md:text-md">Visit &gt;</p>
          <div className="flex items-center gap-1">
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <p>{spot.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
