import Image from "next/image";
import { features } from "../constants";

export default function Page() {
  return (
    <section
      className="flex flex-col pb-20 md:items-center overflow-hidden bg-cover bg-center bg-no-repeat py-8"
      style={{ backgroundImage: `url(/feature-bg.png)` }}
    >
      <div className="relative z-20 mb-10 text-start">
        <Image
          className="absolute -top-10 -left-2"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h2 className="text-4xl lg:text-5xl font-extrabold">Our Features</h2>
      </div>

      <div className="relative w-full flex items-center justify-center gap-10 px-6">
        <Image
          className="hidden lg:block rotate-10"
          src="/phone.png"
          alt="Phone"
          width={300}
          height={300}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="bg-green-500 rounded-full w-fit p-3">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={25}
                  height={25}
                />
              </div>
              <h3 className="font-bold text-xl mt-4 mb-2">{feature.title}</h3>
              <p className="text-md text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
