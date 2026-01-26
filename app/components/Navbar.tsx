import Link from "next/link";
import Container from "./Container/page";
import Image from "next/image";

export default function Page() {
  return (
    <Container>
      <nav className="py-3 flex justify-between">
        <Link href={"/"}>
          <Image src="/images/wanderzoLogo.png" width={150} height={100} alt="Wanderzo Logo"/>
        </Link>
        <svg
          className="w-9 h-9 mt-1 text-black cursor-pointer duration-300 hover:text-green-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 6H6m12 4H6m12 4H6m12 4H6"
          />
        </svg>
      </nav>
    </Container>
  );
}
