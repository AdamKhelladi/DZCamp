import Container from "../../components/Container/page";

type props = {
  params: {
    category: string;
  }
}

export default function Page({ params }: props) {
  const categoryName = params.category;

  return (
    <Container>
      <section className="h-screen">
        <h1>{categoryName} Camping Spots</h1>
      </section>
    </Container>
  );
}
