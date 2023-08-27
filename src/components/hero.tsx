import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/hero.svg";

export default function Hero() {
  return (
    <section className="container grid gap-16 pt-16 lg:py-0 md:grid-cols-2 lg:h-[600px] items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide">
          Supercharge Your Business with Tailor-Made Software Solutions
        </h1>
        <p className="text-gray-800">
          YeraCode is your gateway to amplified business potential. Our custom
          software solutions are precision-engineered to ignite growth,
          streamline operations, and enhance user experiences. Unleash the full
          prowess of technology with YeraCode and embark on a transformative
          journey toward digital excellence.
        </p>
        <div className="flex items-center gap-4 flex-wrap-reverse">
          <Button size="lg" asChild variant="secondary">
            <Link href="/" className="whitespace-nowrap">
              Our services
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link className="whitespace-nowrap" href="/">
              Talk to us
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center md:justify-end">
        <Image src={hero} alt="Hero Image" />
      </div>
    </section>
  );
}
