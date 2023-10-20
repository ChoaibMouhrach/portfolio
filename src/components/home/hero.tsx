import Image from "next/image"
import { Button } from "../ui/button"
import rec from "@/../public/rec.png";
import Link from "next/link";
import { GITHUB_URL, UPWORK_URL } from "@/config";

const Hero = () => {
  return (
    <div className="container h-[700px] relative" >
      <div>
        <Image src={rec} alt="" className="w-full" />
      </div>
      <div className="absolute container w-full h-full top-0 left-0 flex items-center justify-center" >
        <div className="flex flex-col gap-6 items-center text-center max-w-5xl" >
          <div className="flex flex-col gap-2" >
            <p className="text-lg" >
              I'm a full-stack web developer, currently freelancing full-time on Upwork, I offer money-back guarantee.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight" >
              Success is not final, failure is not fatal: It is the courage to continue that counts.
            </h1>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-4" >
            <Button size="lg" className="text-lg" >
              <Link href={UPWORK_URL} target="_blank" >
                Let's Talk
              </Link>
            </Button>
            <Button size="lg" className="text-lg" >
              <Link href={GITHUB_URL} target="_blank" >
                Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
