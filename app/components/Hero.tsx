import Image from "next/image";

export default function Page() {
  return (
    <section className="relative border-2 border-gray-300 flex flex-col gap-20 py-4 md:py-10 pb-32 md:gap-18 lg:py-20 xl:flex-row">
      <div className="absolute -z-10 right-0 -top-30 h-screen w-screen bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-6 lg:-right-8 xl:-right-10 md:-top-60" />
      <div>
        <Image
          className="-mb-3 lg:-mb-5"
          src="camp.svg"
          alt="Camp image"
          width={50}
          height={50}
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold md:w-1/2 leading-tight mb-8">
          Explore Algeria’s Wild Nature
        </h1>
        <p className="text-gray-600 md:max-w-1/2 mt-0">
          Discover the best camping spots in Algeria, plan your trips easily,
          and enjoy nature with confidence.Adventure awaits you in every corner
          of the country.
        </p>
        <div className="py-8 flex items-center flex-wrap">
          <div className="flex items-center gap-2 mr-4">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="star.svg"
                  alt="Star image"
                  width={30}
                  height={30}
                />
              ))}
          </div>
          <div className="font-bold text-xl mt-1 md:mt-0">
            <span>100K </span>
            <span className="font-medium cursor-pointer underline text-gray-600">
              Excellent Reviews
            </span>
          </div>
        </div>
        <div>
          buttons
        </div>
      </div>
    </section>
  );
}
