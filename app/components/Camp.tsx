import Image from "next/image";

type CampSiteProps = {
  bgImg: string;
  title: string;
  subtitle: string;
  pplJoined: string;
};

function CampSite({ bgImg, title, subtitle, pplJoined }: CampSiteProps) {
  return (
    <div
      className="w-full h-full min-w-220 bg-cover bg-center bg-no-repeat rounded-lg lg:rounded-4xl 2xl:rounded-5xl"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="h-full flex flex-col items-start justify-between p-4 lg:px-20 lg:py-10">
        <div className="flex items-center gap-2">
          <div className="bg-green-500 rounded-full p-3">
            <Image src="/folded-map.svg" alt="Map" width={25} height={25} />
          </div>
          <div>
            <h2 className="font-bold text-md text-white">{title}</h2>
            <p className="text-sm text-gray-200">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-3 mb-2">
            {Array(4)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src={`/person-${index + 1}.png`}
                  alt="Person"
                  width={33}
                  height={33}
                />
              ))}
          </div>
          <p className="text-md font-bold text-white">{pplJoined}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <section className="relative flex flex-col py-6 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="scrollbar-hide overflow-x-auto flex h-85 w-full items-start justify-start gap-6 lg:h-100 xl:h-160">
        {CampSite({
          bgImg: "/campImg4.jpg",
          title: "Mountains Adventure Camp",
          subtitle: "Mountain-view cozy cabins",
          pplJoined: "+50 Joined",
        })}

        {CampSite({
          bgImg: "/campImg2.jpg",
          title: "Sahara Adventure Camp",
          subtitle: "Camp under Sahara’s stars",
          pplJoined: "+87 Joined",
        })}
      </div>

      <div className="lg:absolute bottom-0 right-50 lg:w-110 px-4 md:px-8 py-8 mt-6 text-white rounded-xl bg-green-600">
        <h2 className="font-semibold text-4xl mb-4">
          <span className="font-extrabold text-5xl">Filling Lost</span> and Not
          Knowing the Way ?
        </h2>

        <p className="">
          We provide a solution to help you find your way back to the campsite
          and navigate through the wilderness with confidence.
        </p>
      </div>
    </section>
  );
}
