import Container from "./components/Container/page";
import Hero from "./components/Hero";
import Camp from "./components/Camp";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import TopDestinations from "./components/TopDestinations";
import CampingSpots from "./components/CampingSpots";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Camp />
      <TopDestinations />
      <CampingSpots />
      <Features />
      <GetApp />
    </Container>
  );
}
