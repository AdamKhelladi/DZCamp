import Container from "./components/Container/page";
import Hero from "./components/Hero";
import Camp from "./components/Camp";
import Features from "./components/Features";
import GetApp from "./components/GetApp";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Camp />
      <Features />
      <GetApp />
    </Container>
  );
}
