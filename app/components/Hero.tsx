import Image from "next/image";
import Button from "./Button/page";

export default function Page() {
  return (
    <section className="relative flex flex-col gap-20 py-0 md:py-10 pb-32 md:gap-18 lg:py-10 xl:flex-row">
      <div className="absolute -z-10 right-0 -top-10 h-screen w-screen bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-6 lg:-right-8 xl:-right-10 md:-top-60" />
      <div>
        <Image
          className="-mb-1 lg:-mb-4"
          src="camp.svg"
          alt="Camp image"
          width={50}
          height={50}
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold md:w-1/2 leading-tight mb-8">
          Your Guide to Algeria’s Camping Adventures
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
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            type="button"
            title="Download App"
            bgVariant="bg-green-600"
            bgHoverVariant="hover:bg-orange-500"
          ></Button>
          <div className="flex items-center gap-2">
            <Image src="play.svg" alt="App image" width={30} height={30} />
            <p className="font-bold text-lg">How we work?</p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-900 text-white rounded-2xl p-2 w-68 h-32">
        <div>
          <p className="text-gray-400">Location</p>
          <h2 className="font-bold">Tizi Ouzou</h2>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <p className="text-gray-400">Distance</p>
            <h2 className="font-bold">170.28 mi</h2>
          </div>
          <div>
            <p className="text-gray-400">Elevation</p>
            <h2 className="font-bold">2.040 Km</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
