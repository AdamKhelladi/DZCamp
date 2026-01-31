import Image from "next/image";

export default function Page() {
  return (
    <section className="py-20 flex flex-col items-center">
      <div className="relative z-20 mb-10 text-start">
        <Image
          className="absolute -top-10 -left-2"
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h2 className="text-4xl lg:text-5xl font-extrabold">Categories</h2>
      </div>
    </section>
  );
}
