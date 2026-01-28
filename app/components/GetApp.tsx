import Button from "./Button/page";
import Image from "next/image";

const androidIcon = (
  <Image src="/android.svg" alt="Download Icon" width={20} height={20} />
)

const iosIcon = (
  <Image src="/apple.svg" alt="Download Icon" width={20} height={20} />
)


export default function Page() {
  return (
    <section className="relative px-6 pt-8 flex flex-col lg:flex-row rounded-4xl h-screen lg:h-[380px] lg:h-200 z-20 overflow-hidden">
      <div className="absolute -z-10 right-0 top-0 w-screen h-screen lg:h-100 bg-[url('/pattern.png')] bg-cover bg-center" />
      <div className="lg:my-auto lg:pl-14">
        <h2 className="text-4xl font-bold text-white mb-5">Get For Free!</h2>
        <p className="text-gray-200">
          Download coming soon on iOS & Android — Stay tuned
        </p>
        <div className="flex flex-col gap-2 mt-12 md:flex-row mb-10">
          <Button
            type="button"
            icon={androidIcon}
            title="Download App"
            bgVariant="bg-neutral-800 border-2 border-white"
            bgHoverVariant="hover:bg-neutral-700"
          ></Button>
          <Button
            type="button"
            icon={iosIcon}
            title="Download App"
            titleColor="text-green-600"
            bgVariant="bg-white border-2 border-white"
            bgHoverVariant="hover:bg-gray-200"
          ></Button>
        </div>
      </div>

      <Image className="flex mx-auto lg:mx-0 lg:absolute -top-10 right-20" src="/phones.png" alt="Phones" width={350} height={550} />
    </section>
  );
}
