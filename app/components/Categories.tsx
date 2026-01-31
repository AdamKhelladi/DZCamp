"use client";

import Image from "next/image";
import { categories } from "../constants";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <section className="py-20 flex flex-col md:items-center gap-8">
      <div className="relative z-20 md:mb-10 text-start">
        <Image
          className="absolute -top-10 -left-2"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h2 className="text-4xl lg:text-5xl font-extrabold">Categories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 w-full duration-300">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-3xl w-full h-130 overflow-hidden duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-black/90"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={300}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 w-full h-full bg-black opacity-35"></div>
            <div className="absolute bottom-0 left-0 right-0 w-full text-white px-6 py-8">
              <h3 className="font-extrabold text-5xl mb-2">{category.name}</h3>
              <p className="text-lg text-gray-100">{category.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center text-white bg-green-600 hover:bg-orange-500 duration-300 text-lg rounded-4xl cursor-pointer box-border border border-transparent shadow-xs font-medium leading-5 px-4 py-3"
                onClick={() =>
                  router.push(`/CampingSpots/${category.name.toLowerCase()}`)
                }
              >
                {" "}
                Explore Camping Spots{" "}
                <svg
                  className="w-5 h-5 ms-1.5 -me-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />{" "}
                </svg>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
