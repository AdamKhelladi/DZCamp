import Link from "next/link";
import Container from "./Container/page";
import Image from "next/image";
import { navLinks } from "../constants";

export default function Page() {
  return (
    <Container>
      <nav className="py-3 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/images/wanderzoLogo.png"
            width={150}
            height={100}
            alt="Wanderzo Logo"
          />
        </Link>
        <svg
          className="w-9 h-9 lg:hidden text-black cursor-pointer duration-300 hover:text-green-600"
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

        <ul className="hidden h-full lg:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              <li className="font-medium text-gray-700 hover:text-black duration-300">
                {link.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* <div className="px-6 py-3 text-white cursor-pointer duration-300 rounded-4xl flex items-center gap-2 bg-gray-900 font-bold hover:bg-green-600">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <h2>Login</h2>
        </div> */}
      </nav>
    </Container>
  );
}
