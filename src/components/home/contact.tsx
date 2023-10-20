import Link from "next/link"
import { Button } from "../ui/button"
import { UPWORK_URL } from "@/config"

const Contact: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col gap-2 justify-center text-center" >
        <h1 className="text-2xl" >
          Contact Me
        </h1>
        <p>
          Feel free to reach out to.
        </p>
      </div>

      <div className="container flex justify-center" >
        <Button size="lg" className="text-lg" asChild >
          <Link href={UPWORK_URL} target="_blank" >
            Let&apos;s Talk
          </Link>
        </Button>
      </div>
    </>
  )
}

export default Contact
