import { campingSpots } from "@/app/campingSpots";
import Container from "@/app/components/Container/page";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "@/app/components/ImageCarousel";

type props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: props) {
  const resolvedParams = await params;
  const spotId = parseInt(resolvedParams.id);

  const spot = campingSpots.find((spot) => spot.id === spotId);

  if (!spot) {
    notFound();
  }

  return (
    <Container>
      <section className="py-8">
        <div className="max-w-115 mx-auto bg-gray-50 rounded-2xl pb-6">
          <ImageCarousel
            images={[spot.image1, spot.image2, spot.image3]}
            name={spot.name}
          />

          {/* Details */}
          <div className="px-2">
            <h1 className="text-3xl md:text-4xl font-extrabold">{spot.name}</h1>
            <div className="flex items-center gap-1 mb-2">
              <svg
                className="w-5 h-5 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-md text-gray-700">{spot.location}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-md text-gray-600">Type: {spot.type}</p>

              <div className="flex items-center gap-2">
                <Image src="/star.svg" alt="Star" width={24} height={24} />
                <span className="text-xl font-semibold">{spot.rating}</span>
              </div>
            </div>

            <Link href={spot.mapUrl} target="_blanc">
              <div className="mt-6 flex items-center gap-2 justify-center rounded-4xl py-4 text-white bg-green-600 mx-auto w-full duration-300 hover:bg-orange-500">
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="font-semibold text-xl">Google Map</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
