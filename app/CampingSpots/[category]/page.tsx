import Container from "../../components/Container/page";
import { campingSpots } from "../../campingSpots";
import CampingSpotCard from "../../components/CampingSpotCard";

type props = {
  params: {
    category: string;
  };
};

export default async function Page({ params }: props) {
  const resolvedParams = await params;
  const categoryName =
    resolvedParams.category.charAt(0).toUpperCase() +
    resolvedParams.category.slice(1);

  return (
    <Container>
      <section className="min-h-140 pg-4 md:pt-10 md:px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">{categoryName}</h1>
        <p className="text-gray-600">
          {
            campingSpots.filter(
              (spot) => spot.type.toLowerCase() === categoryName.toLowerCase(),
            ).length
          }{" "}
          camping spots available
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 md:gap-6 pt-4 md:pt-8">
          {campingSpots
            .filter(
              (spot) => spot.type.toLowerCase() === categoryName.toLowerCase(),
            )
            .map((spot) => (
              <CampingSpotCard key={spot.id} spot={spot} />
            ))}
        </div>
      </section>
    </Container>
  );
}
